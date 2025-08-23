import { Toaster } from 'react-hot-toast';

function layout({ children }) {
    return (
        <div className='pt-30'>
            {children}
        </div>
    )
}

export default layout;