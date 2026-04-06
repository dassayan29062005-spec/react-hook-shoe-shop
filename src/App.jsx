import { useState } from 'react'

import './App.css'



function App() {
  const[cart,setcart]=useState([]);
  const [total,totalset]=useState(0);
  //  count
  const [num,setnum]=useState([]);
  function settotal(val){
   
    totalset((prev)=>val+prev);
  }

  const prod1=["https://i.etsystatic.com/38377029/r/il/6a9d72/5975306566/il_570xN.5975306566_m2ea.jpg",
    "White Casual Sneakers",
    970

  ];
  const prod2=["https://img.tatacliq.com/images/i21//437Wx649H/MP000000024936190_437Wx649H_202501040344141.jpeg",
    "Men’s Mid-Top Ankle Boots",
    770
  ];
  const prod3=[
    "https://img.tatacliq.com/images/i27//437Wx649H/MP000000028563486_437Wx649H_202509292138361.jpeg",
    "Black Running Shoes",
    270
  ];
  const prod4=[
    "https://teakwoodleathers.com/cdn/shop/files/T_SH_MIRAT_01_BR_1080x.jpg?v=1750933450",
    "Classic Leather Formal Shoes",
    600
  ];
  const prod5=[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDKZgNt0PLZ2XFl5zIuvEc3UI3SKP-UCtzg&s",
    "Canvas Slip-On Shoes",
    700
  ];
  const prod6=[
    "https://www.jiomart.com/images/product/original/rvgog8f8gz/asian-men-s-sports-running-shoes-for-men-product-images-rvgog8f8gz-0-202304282017.jpg?im=Resize=(500,630)",
    "Sports Training Shoes",
    780
  ];


  // const prod7=[
    
  //   "White Casual Sneakers",
  //   70
  // ];
  // const prod8=["https://i.etsystatic.com/38377029/r/il/6a9d72/5975306566/il_570xN.5975306566_m2ea.jpg",
  //   "White Casual Sneakers",
  //   70
  // ];
  return (
    <>
        <header className='header'>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/034/915/785/small/shoes-logo-design-template-premium-vector.jpg" className='logo' alt="" />
          <div>
            <ul>
              <li className='option'>home</li>
              <li className='option'>Categories</li>
              <li className='option'>About us</li>
            </ul>
          </div>
          
          </header>   

          <section className='section'>
            <div className="item">
              {/* 1 */}
              <div className="prod">
                  <img  src="https://i.etsystatic.com/38377029/r/il/6a9d72/5975306566/il_570xN.5975306566_m2ea.jpg" alt="shoe" />
                  <div className="data">
                  <h1>White Casual Sneakers</h1>
                 
                  <p>$970</p>
                  
                  <button className='btn'
                     onClick={()=>{setcart([...cart,prod1]); settotal(970);setnum(num=>[...num,1])}}
                  >Add to cart</button>
                </div>
              </div>
              {/* 2 */}
              <div className="prod">
                  <img  src="https://img.tatacliq.com/images/i21//437Wx649H/MP000000024936190_437Wx649H_202501040344141.jpeg" alt="shoe" />
                  <div className="data">
                  <h1>Men’s Mid-Top Ankle Boots</h1>
               
                  <p>$770</p>
                  
                  <button className='btn'  onClick={(e)=>{setcart([...cart,prod2]); settotal(770);setnum(num=>[...num,1])}}>Add to cart</button>
                </div>
              </div>
              {/* 3 */}
              <div className="prod">
                  <img  src="https://img.tatacliq.com/images/i27//437Wx649H/MP000000028563486_437Wx649H_202509292138361.jpeg" alt="shoe" />
                  <div className="data">
                  <h1>Black Running Shoes</h1>
             
                  <p>$270</p>
               
                  <button  onClick={(e)=>{setcart([...cart,prod3]); settotal(270);setnum(num=>[...num,1])}} className='btn'>Add to cart</button>
                </div>
              </div>
              {/* 4 */}
              <div className="prod">
                  <img  src="https://teakwoodleathers.com/cdn/shop/files/T_SH_MIRAT_01_BR_1080x.jpg?v=1750933450" alt="shoe" />
                  <div className="data">
                  <h1>Classic Leather Formal Shoes</h1>
             
                  <p>$600</p>
               
                  <button  onClick={(e)=>{setcart([...cart,prod4]); settotal(600);setnum(num=>[...num,1])}} className='btn'>Add to cart</button>
                </div>
              </div>
              {/* 5 */}
              <div className="prod">
                  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDKZgNt0PLZ2XFl5zIuvEc3UI3SKP-UCtzg&s" alt="shoe" />
                  <div className="data">
                  <h1>Canvas Slip-On Shoes</h1>
             
                  <p>$700</p>
               
                  <button  onClick={(e)=>{setcart([...cart,prod5]); settotal(700);setnum(num=>[...num,1])}} className='btn'>Add to cart</button>
                </div>
              </div>
              {/* 6 */}
              <div className="prod">
                  <img  src="https://www.jiomart.com/images/product/original/rvgog8f8gz/asian-men-s-sports-running-shoes-for-men-product-images-rvgog8f8gz-0-202304282017.jpg?im=Resize=(500,630)" alt="shoe" />
                  <div className="data">
                  <h1>Sports Training Shoes</h1>
             
                  <p>$780</p>
               
                  <button className='btn'  onClick={(e)=>{setcart([...cart,prod6]); settotal(780);setnum(num=>[...num,1])}}>Add to cart</button>
                </div>
              </div>
              
              

            </div>
            <div className="cart" >
                <h2>Cart:</h2>
                <div className="cartitem">
                  {
            
            cart.length>0?(
              cart.map((c,i) => {
                return(

                
                <div className='show' key={i}>
                  {/* <img style={{gridColumn:1/1,border:'2px solid red'}} src={c[0]} alt="" /> */}
                  <div style={{backgroundImage:`url(${c[0]})`,backgroundSize:'cover', height:'60px', width:'60px'}}></div>
                  
                  <div style={{display:'grid', gap:'40px'}}>
                    <h4 >{c[1]}</h4>
                    <p>{c[2]}</p>
                  </div>
                  {/* +/- */}
                  <div className='addbtn'>
                    <button className='pos' onClick={()=>{
                      setnum((prev)=>(
                        prev.map((n,index)=> index===i?n+1:n)

                      ))
                    }}>+</button>
                    <p style={{height:'fit-content'}}> {num[i]}</p>
                    <button className='pos' >-</button>
                  </div>
                </div>
              );
              })
            ):(               
                <div className='show'>
                  nothing added</div>
               )}
                </div>
            <p>Total: {total}</p>
               </div>
            </section>  
              
    </>
  )
}

export default App;
