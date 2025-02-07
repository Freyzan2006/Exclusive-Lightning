import LinkPath from "@components/ui/LinkPath"


interface IProps {
    img?: string
    title: string
    discount?: string
    path: string
}

const CarouselContent: React.FC<IProps> = ({ img, title , discount, path }) => {
    return (
        <div className = 'flex flex-col items-start pl-15px gap-5 max-w-[200px] w-full'>
            <div className='flex justify-center items-center gap-5'>
                <img src={ img } className="w-[50px]" alt="logo" />
                <p>{ title }</p>
            </div>
            <h3 className='text-4xl'>
                { discount }
            </h3>
            <LinkPath title = 'Show Now' to = { path } className='text-white before:bg-white' />
        </div>
    )
} 

export default CarouselContent