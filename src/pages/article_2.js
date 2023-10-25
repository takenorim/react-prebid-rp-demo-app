import React from "react"
import { AdvertisingProvider, AdvertisingSlot } from 'react-prebid-rp';
import Content from '../components/content_2';
import Header from '../components/header';
import Footer from '../components/footer';

const myConfig_1 = {
    active: true,
    shouldRefresh:true,
    slots: [
        {
            path: '/5300653/reactTest/header',
            id: 'div-gpt-ad-header',
            sizes: [[728,90],[970,90],[970,250],[320,50]]
        }
    ]
};
const myConfig_2 = {
    active: true,
    shouldRefresh:true,
    slots: [
        {
            path: '/5300653/reactTest/siderail',
            id: 'div-gpt-ad-siderail-1',
            sizes: [[300,250],[300,600]],
            collapseEmptyDiv: [true,true]
        },
        {
            path: '/5300653/reactTest/siderail',
            id: 'div-gpt-ad-siderail-2',
            sizes: [[300,250],[300,600]],
            collapseEmptyDiv: [true,true]
        },
    ]
};
const myConfig_3 = {
    active: true,
    shouldRefresh:true,
    slots: [
        {
            path: '/5300653/reactTest/header',
            id: 'div-gpt-ad-footer',
            sizes: [[728,90],[970,90],[970,250],[320,50]]
        }
    ]
};
const myConfig = {
    active: true,
    shouldRefresh:true,
    slots: [
        {
            path: '/5300653/reactTest/header',
            id: 'div-gpt-ad-header',
            sizes: [[728,90],[970,90],[970,250],[320,50]]
        },
        {
            path: '/5300653/reactTest/siderail',
            id: 'div-gpt-ad-siderail-1',
            sizes: [[300,250],[300,600]],
            collapseEmptyDiv: [true,true]
        },
        {
            path: '/5300653/reactTest/siderail',
            id: 'div-gpt-ad-siderail-2',
            sizes: [[300,250],[300,600]],
            collapseEmptyDiv: [true,true]
        },
        {
            path: '/5300653/reactTest/header',
            id: 'div-gpt-ad-footer',
            sizes: [[728,90],[970,90],[970,250],[320,50]]
        }
    ]
};

export default function App() {
    return (
        //This (i.e. multiple AdvertisingProvider components) does NOT work
        /*
        <>
            <AdvertisingProvider config={myConfig_1}>
                <AdvertisingSlot id="div-gpt-ad-header" />
                <Header />
            </AdvertisingProvider>

            <AdvertisingProvider config={myConfig_2}>
                <AdvertisingSlot id="div-gpt-ad-siderail-1" />
                <Content />
                <AdvertisingSlot id="div-gpt-ad-siderail-2" />
            </AdvertisingProvider>

            <AdvertisingProvider config={myConfig_3}>
                <AdvertisingSlot id="div-gpt-ad-footer" />
                <Footer />
            </AdvertisingProvider>
        </>
        */

        // This works
        <>
            <AdvertisingProvider config={myConfig}>
                <AdvertisingSlot id="div-gpt-ad-header" />
                <Header />
                <AdvertisingSlot id="div-gpt-ad-siderail-1" />
                <Content />
                <Footer />
                <AdvertisingSlot id="div-gpt-ad-footer" />
            </AdvertisingProvider>
        </>
    );
}
