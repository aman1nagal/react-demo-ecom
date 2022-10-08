
function App() {
    const cat=[
        {
            title:"Shirt"
        },
        {
            title:"Pants"
        },
        {
            title:"Coat"
        },
        {
            title:"Shoes"
        },
        {
            title:"T-shirt"
        }
    ]
    return (
        <div className="App">
             <div className="catagories">
                {cat.map((catagories)=>(
                    <div className="catagory-container-">
                        <div className="catagory-body"> 
                            <h2>{catagories.title} </h2>
                            <p>Shop Now</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default App