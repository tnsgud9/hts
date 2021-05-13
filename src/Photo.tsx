import Title from './Title'

type PhotoType = {
    address:string;
    description:string;
}

const Photo = (props : PhotoType) =>{
    const {address, description} = props; 
    return(
        <>
        <Title title ="Happy Trolling" subTitle ="Hell Yeah!!!!"/>
        <section>
            <img src={address}/>
        </section>
        <article>{description}</article>
        </>
    );
};

export default Photo;