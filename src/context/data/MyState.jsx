import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'
import { QuerySnapshot, Timestamp, addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { fireDB } from '../../firebase/FirebaseConfig'

const MyState = (props) => {
  //darkmode state
  const [mode, setMode] = useState("light")
  const toggle = () => {
    if (mode == "light") {
      setMode("dark")
      document.body.style.backgroundColor = "rgb(17,24,39)";
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
    }
  }
  //loader state
  const [loading, setLoading] = useState(false)
  //cart system
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-Us", {
      month: 'short',
      day: "2-digit",
      year: "numeric",
    }
    )
  })

  const addProduct = async () => {
    if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
      return toast.error('Please fill all fields')
    }
    setLoading(true)
    try {
      const productRef = collection(fireDB, 'productss')
      await addDoc(productRef, products)
      toast.success("Product Added")
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 800);
      getProductData();
      setLoading(false)
    } catch (error) {
      console.log("error");
      setLoading(false)
    }
    //setProducts("")
  }
  const [product, setProduct] = useState([]);
  const getProductData = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(fireDB, 'productss'),
        orderBy('time')
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productArray)
        setLoading(false)
      })
      return () => data;

    } catch (error) {
      console.log("error");
      setLoading(false)
    }

  }
  useEffect(() => {
    getProductData();
  }, [])
  //console.log("items", product)
  //Edit Prodcut
  const editProduct = (item) => {
    setProducts(item)
  }
  //delete Product
  const deleteProduct = async (item) => {
    setLoading(true)
    try {
      await deleteDoc(doc(fireDB, 'productss', item.id))
      toast.success("Deleted Successfully");
      getProductData();
      setLoading(false)
    } catch (error) {
      console.log("error");
    }
  }

  //Update Prodcut
  const updateProduct = async () => {
    setLoading(true)
    try {
      await setDoc(doc(fireDB, 'productss', products.id), products)
      toast.success('Product Updated Successfully')
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 800);
      getProductData();
      setLoading(false)
    } catch (error) {
      console.log("error")
    }
    /*setProduct("")*/
  }
  //getOrder
  const [orderdata, setOrderdata] = useState([])
  const getOrder = async () => {
    try {
      const result = await getDocs(collection(fireDB, "orders"))
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
      })
      setOrderdata(ordersArray);
      console.log(ordersArray);
    } catch (error) {
      console.log("error");
    }
  }
  useEffect(() => {
    getProductData();
    getOrder();
  }, []);
  return (
    <MyContext.Provider value={{
      mode, toggle, loading, setLoading, products, setProducts, addProduct,
      product, deleteProduct, updateProduct, editProduct, orderdata
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState


