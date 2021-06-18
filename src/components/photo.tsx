import styles from '../styles/components/photo.module.css';
interface PhotoProps{
    id: number;
    title: string;
    url: string;
}


export default function Photo(props){
    const { id, title, url} = props.data;
    function addCart(){
        console.log("click em addCart: ", id);
    }
    return(
        <div className={styles.container}>
            <div>
                <img 
                    src={url}
                    loading="lazy"
                    alt="hum"
                />
                <span onClick={addCart}>{id}</span>
            </div>
            <p>{title}</p>
        </div>
    );
}