import Spinner from './Spinner.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={Spinner} alt="Loading.."/>
            <h5>fetching data</h5>
        </div>
    )
}

export default Loader
