import React from 'react';
import './Layout.css';

const Price = () => (
    <div className='Price'>
        <div className='PriceContent'>
            <h3 className="PriceText">Preço e pagamento</h3>
                <div className='PriceDivide'>
                    <div className=' split PriceTable'>
                        <table className='Table'>
                            <thead>
                                <tr>
                                    <th colspan='2'>Valores</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1 hora</td>
                                    <td>R$ 100,00 / hr</td>
                                </tr>
                                <tr>
                                    <td>2 horas ou +</td>
                                    <td>R$ 90,00 / hr</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className=' split PriceTextContent'>
                        <p>Suspendisse sagittis nibh nec sem ullamcorper, ac porttitor leo ornare. Phasellus gravida posuere 
                        consequat. Donec id viverra quam. Curabitur dui augue, aliquam eget sem at, sagittis condimentum augue. 
                        Suspendisse feugiat nunc eget augue bibendum rutrum. Fusce congue sem ac libero varius, quis sollicitudin 
                        enim accumsan. Vivamus tincidunt dui et magna elementum venenatis. Vivamus in iaculis odio. Ut mattis 
                        vulputate neque, ut dictum lacus venenatis porttitor.</p>

                        <p>In rutrum ex eget consectetur cursus. Etiam rhoncus convallis orci at vehicula. Duis venenatis sodales 
                        risus, vel consequat lorem mollis nec. Suspendisse vel leo hendrerit felis aliquet dignissim vel nec 
                        magna. Sed non mollis eros, id pulvinar purus. Phasellus ullamcorper gravida turpis, sed cursus ex 
                        tincidunt id. Duis tellus enim, pharetra non iaculis eget, euismod sollicitudin massa. Etiam vel 
                        congue est. Fusce et volutpat ex.</p>
                    </div>
                </div>
        </div>
    </div>
)

export default Price;