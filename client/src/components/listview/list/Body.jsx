import React from 'react'

const PreviewImage = () => {
    return (
        <img className='PreviewImage' src="https://img.freepik.com/free-vector/flat-design-hungry-emoji-illustration_23-2151007706.jpg?semt=ais_hybrid&w=740&q=80" />
    )
}

const Analytics = () => {
    return (
        <div className='Analytics FRCC color777 mT10'>
            <i class="fa fa-square-poll-vertical mR5"></i>
            <span className='fs12'>0 clicks (last 30 days)</span>
        </div>
    )
}

const Body = () => {
    return (
        <div className='FRSS body mT10'>
            <PreviewImage />
            <div className='FCSS mL15'>
                <h3 className='link-title mB5'>Doughnut</h3>
                <a href='https://youtube.com' className='long-url' target='_blank'>https://www.google.com/search?sca_esv=651164c6481fa95a&sxsrf=ANbL-n746ovCcA4Oxv5N6IUDOZ6O6ZJf9w:1768741458231&udm=2&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3vWUtYx0DZdicpfE1faGYemg2KC4yuMPyQlIvlWqq2AtcdVMJmMDffRprXURy79lwU70Lz2dh0euofCmx0cOkSMUN_9xLa1WY5bR54cNlXeNGNTIGEBWBS4AHaEHunITDBubohheJbfr-zPyq37pAUUqNqfD1HmhD39p6KjzK0vACrrg3Q&q=bitly+UI+design&sa=X&ved=2ahUKEwj9vcSyk5WSAxWXTWwGHYQjPHYQtKgLegQIFhAB&biw=1470&bih=775&dpr=2&aic=0#sv=CAMSWBoyKhBlLVlSV0xteEoza0pCcGFNMg5ZUldMbXhKM2tKQnBhTToOeEoxV21xZ2EzVGZtS00gBCocCgZtb3NhaWMSEGUtWVJXTG14SjNrSkJwYU0YADABOAAYByDiyrC6BzACSgoIAhACGAIgAigC</a>
                <Analytics />
            </div>
        </div>
    )
}

export default Body