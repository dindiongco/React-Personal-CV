type Props = {
  name: string
  description: string
  image: string
  url: string
}

function Project({name, description, image, url}: Props) {
    const overlayStyles = `p-5 absolute z-30 flex h-[250px] w-[300px] md:h-[320px] md:w-[400px] flex-col items-center justify-center
    whitespace-normal bg-secondary-400 text-center text-white opacity-0 transition duration-500 hover:opacity-95`

  return (
    <li className='relative inline-block h-[250px] w-[300px] md:h-[300px] md:w-[400px] mx-auto'>
        <div className={overlayStyles}>
            <a target="_blank" href={url}>
              <p className="text-2xl">{name}</p>
              <p className="mt-5">{description}</p>
            </a>
        </div>
        <img src={image} alt={`${image}`} />
    </li>
  )
}

export default Project