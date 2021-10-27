import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
interface song {
	id: string;
	title: string;
	duration: number;
}
const Searchsong = () => {
	const [query, setquery] = useState('never');
	const [data, setData] = useState<song[]>([]);
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
		setquery(e.target.value);
		console.log(query);
	};
	useEffect(() => {
		const fetchsongs = async () => {
			try {
				let response = await fetch(
					`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`,
				);
				if (response.ok) {
					let fetchedBooks = await response.json();
					let songs: song[] = await fetchedBooks.data;
					console.log(songs);
					setData(songs);
					console.log(data);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchsongs();
	}, [query]);
	return (
		<>
			<div style={{ marginTop: '20px' }}>
				<input
					type='text'
					placeholder='Search'
					value={query}
					onChange={handleChange}
				/>
			</div>
			<Container className='mt-3'>
				<Row>
					{data?.map((song) => {
						return (
							<Col lg={4} className='mt-3'>
								<Card style={{ width: '18rem', color: 'black' }}>
									<Card.Body>
										<Card.Title>{song.title}</Card.Title>
										<Card.Text>{song.duration}</Card.Text>
										<Button variant='primary'>{song.id}</Button>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
				</Row>
			</Container>
		</>
	);
};

export default Searchsong;
