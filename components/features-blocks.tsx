import { isTemplateExpression } from "typescript"

export default function FeaturesBlocks() {
  const features = [
    {
      id: 1,
      title: 'Automated Phishing Detection',
      description: 'Automatically identify malicious domains among newly registered websites, saving time and resources.',
      icon: <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
        <g strokeWidth="2">
          <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
          <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
          <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
          <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
        </g>
      </g>
    </svg>
    },
    {
      id: 2,
      title: 'WHOIS Database Integration',
      description: 'Access domain registration information, including registration date and owner details, to enhance the detection process.',
      icon: <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
        <g strokeWidth="2">
          <path className="stroke-current text-blue-300" d="M34.743 29.714L36.57 32 27.43 43.429H24M24 20.571h3.429l1.828 2.286" />
          <path className="stroke-current text-white" strokeLinecap="square" d="M34.743 41.143l1.828 2.286H40M40 20.571h-3.429L27.43 32l1.828 2.286" />
          <path className="stroke-current text-blue-300" d="M36.571 32H40" />
          <path className="stroke-current text-white" d="M24 32h3.429" strokeLinecap="square" />
        </g>
      </g>
    </svg>
    },
    {
      id: 3,
      title: 'Image-Based Analysis',
      description: 'Analyze web page images to distinguish genuine websites from phishing sites, ensuring comprehensive detection.',
      icon:  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
        <g strokeWidth="2">
          <path className="stroke-current text-white" d="M19.429 32a12.571 12.571 0 0021.46 8.89L23.111 23.11A12.528 12.528 0 0019.429 32z" />
          <path className="stroke-current text-blue-300" d="M32 19.429c6.943 0 12.571 5.628 12.571 12.571M32 24a8 8 0 018 8" />
          <path className="stroke-current text-white" d="M34.286 29.714L32 32" />
        </g>
      </g>
    </svg>
    },
    {
      id: 4,
      title: 'Phishing Probability Scores',
      description: 'Assign probability scores to domains based on their resemblance to genuine ones, enabling efficient threat prioritization.',
      icon:  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
        <g strokeWidth="2" transform="translate(19.429 20.571)">
          <circle className="stroke-current text-white" strokeLinecap="square" cx="12.571" cy="12.571" r="1.143" />
          <path className="stroke-current text-white" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696" />
          <path className="stroke-current text-blue-300" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835" />
        </g>
      </g>
    </svg>
    },
    {
      id: 5,
      title: 'Real-time Threat Detection',
      description: 'Swiftly detect new phishing domains as they emerge, staying one step ahead of evolving threats in real-time.',
      icon: <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
        <g strokeWidth="2">
          <path className="stroke-current text-white" d="M19.429 32a12.571 12.571 0 0021.46 8.89L23.111 23.11A12.528 12.528 0 0019.429 32z" />
          <path className="stroke-current text-blue-300" d="M32 19.429c6.943 0 12.571 5.628 12.571 12.571M32 24a8 8 0 018 8" />
          <path className="stroke-current text-white" d="M34.286 29.714L32 32" />
        </g>
      </g>
    </svg>
    },
    {
      id: 6,
      title: 'User-Friendly Interface',
      description: 'Enjoy an intuitive and user-friendly interface that provides output in various formats for seamless integration and analysis.',
      icon: <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
        <g strokeWidth="2">
          <path className="stroke-current text-white" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714" />
          <path className="stroke-current text-white" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286" />
          <path className="stroke-current text-white" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286" />
          <path className="stroke-current text-blue-300" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" strokeLinecap="square" />
        </g>
      </g>
    </svg>
    },
  ]

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Explore the features</h2>
            <p className="text-xl text-gray-600">Stay one step ahead of cybercriminals with our cutting-edge phishing detection features – your digital guardian against deceptive schemes!</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            {
              features.map((feat) => {
                return (
                  <div key={feat.id} className="relative flex flex-col items-center p-6 bg-gray-50 rounded shadow-xl">
                    {feat.icon}
                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{feat.title}</h4>
                    <p className="text-gray-700 text-center">{feat.description}</p>
                  </div>
                )
              })
            }

          </div>

        </div>
      </div>
    </section>
  )
}