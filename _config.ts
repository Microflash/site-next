import lume from 'lume/mod.ts'
import data from './src/_data.ts'

const site = lume({
	src: './src',
	dest: './dist',
	location: new URL(data.app.url),
	server: {
		port: 8080
	}
})

export default site
