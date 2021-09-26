const features = [
	{
		name: 'We handle all the engineering so you don\'t have to',
		description: '',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-01.jpg',
		imageAlt: '',
	},
	{
		name: 'Our approach',
		description: '',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg',
		imageAlt: '',
	},
	{
		name: 'You + Us',
		description: '',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg',
		imageAlt: '',
	},
]
  
const classNames = (...classes) => (classes.filter(Boolean).join(' '))
  
const About = () => (
	<div className="bg-white">
		<div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
			<div className="max-w-3xl mx-auto text-center">
				<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">What we do</h2>
				<p className="mt-4 text-gray-500">
					Everything from developing and deploying your token to managing your metadata and adding custom minting to your site, we provide all of your engineering needs to help launch your project. 
				</p>
			</div>

			<div className="mt-16 space-y-16">
			{features.map((feature, featureIdx) => (
				<div
				key={feature.name}
				className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
				>
				<div
					className={classNames(
					featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
					'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
					)}
				>
					<h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
					<p className="mt-2 text-sm text-gray-500">{feature.description}</p>
				</div>
				<div
					className={classNames(
					featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
					'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8'
					)}
				>
					<div className="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
					<img src={feature.imageSrc} alt={feature.imageAlt} className="object-center object-cover" />
					</div>
				</div>
				</div>
			))}
			</div>
		</div>
	</div>
)

export default About