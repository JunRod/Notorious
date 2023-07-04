import { ThreeDots } from  'react-loader-spinner'
function Loader() {
    return (
        <ThreeDots
            height="20"
            width="50"
            radius="6"
            color="#f7bb62"
            ariaLabel="Cargando..."
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    );
}

export default Loader;