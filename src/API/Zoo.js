const Zoo = ({item}) => {
    return(
        <div class="center">
            <h2>Animal name: {item.name}</h2>
            <h2>Animals type: {item.animal_type} || Animals active time: {item.active_time}</h2>
            <h2>Animals habitat: {item.habitat} || Animals lifespan: {item.lifespan} years</h2>
            <h2>Animals diet: {item.diet}</h2>
            <img src={item.image_link}/>
        </div>
    )
}
export default Zoo