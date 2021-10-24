import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleProduct = () => {
  const {id} = useParams(); //gets the id that comes with the url (variable name setted in App)
  const [loading, setLoading] = React.useState(false);
  const [product, setProduct] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState(1);

  const tabOne = () => {
    setActiveTab(1);
  }

  const tabTwo = () => {
    setActiveTab(2);
  }

  React.useEffect(()=>{
    setLoading(true);

    async function getProduct(){
      try{
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        // console.log(data);
        if(data){
          const {strDrink:name, strDrinkThumb:image, strCategory: category, strGlass: glass, strInstructions:prep, strIngredient1,strIngredient2,strIngredient3,strIngredient4} = data.drinks[0];
          const ingredients = [strIngredient1,strIngredient2,strIngredient3,strIngredient4];
          const newProduct = {name,image,category,glass,prep,ingredients}; //ES6
          setProduct(newProduct);
        } else {
          setProduct(null);
        }
        setLoading(false);
      } catch(error) {
        console.log(error.message);
      }
    }

    getProduct();
  },[id])

  if(loading){
    return <Loading loading={loading}/>
  }

  if(!product){
    return <h2>no product to display</h2>
  }

  const {name,image,category,glass,prep,ingredients} = product;
  return (
    <section className='singleproduct-section'>
      <img src={image} alt={name}/>
      <div className='singleproduct-info'>
        <Link to="/" className="backhome-btn">back to menu</Link>
        <h2>{name}</h2>
        <h5>Category:</h5>
        <p>{category}</p>
        <h5>Glass:</h5>
        <p>{glass}</p>
        <div className='tabs-container'>
          <div className='tabs-header'>
            <h5 className={`tab ${activeTab===1? 'tab-active':null}`} onClick={tabOne}>Ingredients</h5>
            <h5 className={`tab ${activeTab===2? 'tab-active':null}`} onClick={tabTwo}>Preparation</h5>
          </div>
          <div>
            {
              activeTab===1 && ingredients.map((item,index)=>{
                if(item) {
                  return <li key={index}>{item}</li>
                } else {
                  return null;
                }
              
              })
            }

            {
              activeTab===2 && <p className='prep-info'>{prep}</p>
            }
          </div>
        </div>

      </div>
    </section>
  )
}

export default SingleProduct