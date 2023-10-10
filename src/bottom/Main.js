import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../common/Header';
import {products} from '../Products';
import ProductItem from '../common/Productitem';
import {useDispatch} from 'react-redux';
import {addItemToCart, addToWishlist} from '../redux/actions/Actions';

const Main = () => {
  const dispatch = useDispatch();
  const [categoryList, setCategoryList] = useState([]);
  const [tshirtList, setTshirtList] = useState([]);
  const [shoesList, setShoesLits] = useState([]);
  const [trouserList, setTrouserList] = useState([]);
  const [jeansList, setJeansList] = useState([]);
  const [slipperList, setSlipperList] = useState([]);
  const [JacketList, setJacketList] = useState([]);

  useEffect(() => {
    let categories = [];
    products.category.map(item => {
      categories.push(item.category);
    });
    setTshirtList(products.category[0].data);
    setJeansList(products.category[1].data);
    setShoesLits(products.category[2].data);
    setJacketList(products.category[3].data);
    setSlipperList(products.category[4].data);
    setTrouserList(products.category[5].data);
    setCategoryList(categories);
  }, []);

  const Sorting = (products) => {
    const products2=[]
    products.category.map((item)=>{
      products2.push(item)
    })
    products2.map((item)=>(
      item.data.sort((a,b)=>a.price-b.price)
    ))
    setTshirtList(products2[0].data);
    setJeansList(products2[1].data);
    setShoesLits(products2.data);
    setJacketList(products2[3].data);
    setSlipperList(products2[4].data);
    setTrouserList(products2[5].data);
    
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1}}>
        <Header />
        <Image
          source={require('../images/banner.jpeg')}
          style={{
            width: '94%',
            height: 200,
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: 10,
          }}
        />
        <View
          style={{
            width: '100%',
            height: 50,
            justifyContent: 'center',

            alignItems: 'center',
            borderBottomWidth: 0.2,
            borderBottomColor: '#8e8e8e',
            backgroundColor: '#fff',
          }}>
          <TouchableOpacity
            style={{
              marginRight: 20,
              justifyContent: 'center',
              alignItems: 'center',
              width: 50,
              height: 30,
            }}
            onPress={() => {
              Sorting(products);
            }}>
            <Text style={{fontWeight: '600', fontSize: 20}}>Sort</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 20}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={{
                    height: 40,
                    borderRadius: 20,
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{color: '#000', marginLeft: 10, marginRight: 10}}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            marginLeft: 20,
            fontWeight: '600',
            color: '#000',
          }}>
          New T-Shirts
        </Text>
        <View style={{marginTop: 15}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={tshirtList}
            renderItem={({item}) => {
              return (
                <ProductItem
                  item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            marginLeft: 20,
            fontWeight: '600',
            color: '#000',
          }}>
          New Trousers
        </Text>
        <View style={{marginTop: 15}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={trouserList}
            renderItem={({item}) => {
              return (
                <ProductItem
                  item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            marginLeft: 20,
            fontWeight: '600',
            color: '#000',
          }}>
          New Jeans
        </Text>
        <View style={{marginTop: 15}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={jeansList}
            renderItem={({item}) => {
              return (
                <ProductItem
                  item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            marginLeft: 20,
            fontWeight: '600',
            color: '#000',
          }}>
          New Slippers
        </Text>
        <View style={{marginTop: 15}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={slipperList}
            renderItem={({item}) => {
              return (
                <ProductItem
                  item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            marginLeft: 20,
            fontWeight: '600',
            color: '#000',
          }}>
          New Shoes
        </Text>
        <View style={{marginTop: 15, marginBottom: 100}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={shoesList}
            renderItem={({item}) => {
              return (
                <ProductItem
                  item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(x));
                  }}
                />
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;
