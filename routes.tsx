import routes from 'next-routes';

// Name   Page      Pattern
//@ts-ignore
module.exports = routes() // ----   ----      -----
	.add('/', 'index') // about  about     /about
	.add('user', '/:username'); // blog   blog      /blog/:slug
