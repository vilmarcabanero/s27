import http from 'http';
import url from 'url';

let coursesCollection = [
	{
		name: 'React 101',
		description: 'Learn React!',
		price: 600,
		isActive: true,
	},
	{
		name: 'React Native 101',
		description: 'Learn React Native!',
		price: 600,
		isActive: true,
	},
	{
		name: 'Node 101',
		description: 'Learn Node!',
		price: 600,
		isActive: false,
	},
];

let usersCollection = [
	{
		firstName: 'V',
		lastName: 'Cabañero',
		email: 'vcabanero@gmail.com',
		mobileNo: '09278479060',
	},
	{
		firstName: 'G',
		lastName: 'Moros',
		email: 'gmoros@gmail.com',
		mobileNo: '09278479061',
	},
	{
		firstName: 'R',
		lastName: 'Singh',
		email: 'rsingh@gmail.com',
		mobileNo: '09278479062',
	},
];

http
	.createServer((req, res) => {
		let reqUrl = url.parse(req.url, true);

		if (reqUrl.pathname === '/courses' && req.method === 'GET') {
			res.writeHead(200, {
				'Content-Type': 'application/json',
			});
			res.end(JSON.stringify(coursesCollection));
		} else if (reqUrl.pathname === '/activecourses' && req.method === 'GET') {
			let activeCourses = coursesCollection.filter(
				course => course.isActive === true
			);
			res.writeHead(200, {
				'Content-Type': 'application/json',
			});
			res.end(JSON.stringify(activeCourses));
		} else if (reqUrl.pathname === '/users' && req.method === 'GET') {
			res.writeHead(200, {
				'Content-Type': 'application/json',
			});
			res.end(JSON.stringify(usersCollection));
		} else if (reqUrl.pathname === '/users' && req.method === 'POST') {
			let data = '';

			req.on('data', chunk => {
				data += chunk;
			});

			req.on('end', () => {
				data = JSON.parse(data);

				usersCollection.push(data);

				res.writeHead(200, {
					'Content-Type': 'application/json',
				});
				console.log(usersCollection);
				res.end(JSON.stringify(usersCollection));
			});
		} else if (reqUrl.pathname === '/courses' && req.method === 'POST') {
			let data = '';
			req.on('data', chunk => {
				data += chunk;
			});

			req.on('end', () => {
				data = JSON.parse(data);

				coursesCollection.push(data);
				res.writeHead(200, {
					'Content-Type': 'application/json',
				});
				console.log(coursesCollection);
				res.end(JSON.stringify(coursesCollection));
			});
		} else if (reqUrl.pathname === '/courses' && req.method === 'DELETE') {
			coursesCollection.pop();
			
			res.writeHead(200, {
				'Content-Type': 'application/json',
			});
			res.end(JSON.stringify(coursesCollection));
		} else {
			res.writeHead(404, {
				'Content-Type': 'text/plain',
			});
			res.end('Page not found!');
		}
	})
	.listen(4000);

console.log('Server Running at Localhost:4000');
