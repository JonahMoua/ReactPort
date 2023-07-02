import { FaAmazon } from 'react-icons/fa';
import amazon1 from '../../images/amazon1.png';
import amazon2 from '../../images/amazon2.png';
import amazon3 from '../../images/amazon3.png';

import covid from '../../images/covid.png'

import capital from '../../images/capital.png'
import capital1 from '../../images/capital1.png'


export const homeObjOne = {
    id: 'project',
    title: 'Premium Bank',
    headLine: 'Unlimited Transaction with zero fees',
    description:'Get access to our exclusive app that allows you to send unlimited transaction without getting charged any fees.',
    buttonLabel: 'Get Started',
    link: '//clone-16516.firebaseapp.com',
    imgStart: true,
    img: [
        amazon1,
        amazon2,
        amazon3
    ],

    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: '',
    title: 'Unlimited',
    headLine: 'Unlimited Transaction with zero fees',
    description:'Get access to our exclusive app that allows you to send unlimited transaction without getting charged any fees.',
    buttonLabel: 'Learn More',
    link: '//covid-tracker-cee7d.firebaseapp.com',
    imgStart: false,
    img: [
        covid
    ],
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjThree = {
    id: '',
    title: 'Premium Bank',
    headLine: 'Creating an account is extremely easy',
    description:'Get everything set up and ready in under 10 minutes. All you need to do is add your information and you are ready to go.',
    buttonLabel: 'Create an Account',
    link: '//capital-a2b4b.web.app',
    imgStart: true,
    img: [
        capital,
        capital1
    ],
    dark: true,
    primary: true,
    darkText: false
};