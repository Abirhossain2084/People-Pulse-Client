
import { useState } from 'react';
import orderbanner from '../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover/Cover';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import FoodCard from '../../components/Card/FoodCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    console.log(category);

    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex)

    const [menu] = useMenu();



    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const dessert = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')


    return (
        <div>
             <Helmet>
                <title>Order Food</title>
            </Helmet>
            <Cover
                img={orderbanner}
                title={'Order Food'}
                description={''}
            ></Cover>


            <div className='container mx-auto my-20 grid justify-center items-center'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>soup</Tab>
                        <Tab>Desert</Tab>
                        <Tab>Drinks</Tab>

                    </TabList>

                    {/* salad */}
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                            {
                                salad.map(item => <FoodCard
                                    key={item.id}
                                    item={item}
                                ></FoodCard>)
                            }
                        </div>

                    </TabPanel>
                    {/* pizza */}
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                            {
                                pizza.map(item => <FoodCard
                                    key={item.id}
                                    item={item}
                                ></FoodCard>)
                            }
                        </div>

                    </TabPanel>
                    {/* soup */}
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                            {
                                soup.map(item => <FoodCard
                                    key={item.id}
                                    item={item}
                                ></FoodCard>)
                            }
                        </div>

                    </TabPanel>
                    {/* desert */}
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                            {
                                dessert.map(item => <FoodCard
                                    key={item.id}
                                    item={item}
                                ></FoodCard>)
                            }
                        </div>

                    </TabPanel>
                    {/* drinks */}
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                            {
                                drinks.map(item => <FoodCard
                                    key={item.id}
                                    item={item}
                                ></FoodCard>)
                            }
                        </div>

                    </TabPanel>


                </Tabs>
            </div>
        </div>
    );
};

export default Order;