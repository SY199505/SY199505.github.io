import Mock from 'mockjs'

export default Mock.mock('/api/getTypeList', {
	'navList|5': [{
		'typeName|2': '@String',
		'typeSrc': Mock.Random.dataImage(),
		'picList|5' : [{
			'town|2' : '@String',
			'city|2' : '@String',
			'imgSrc' : Mock.Random.dataImage()
		}]
	}]
});

