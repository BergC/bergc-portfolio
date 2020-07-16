import React from 'react';

const Contact = () => (
    <div className='contact'>
        <ul className='contact__list'>
            <li className='contact__list-item'>
                <a
                    href='https://www.linkedin.com/in/christopher-berg-159b23b5/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <ion-icon name='logo-linkedin'></ion-icon>
                </a>
            </li>
            <li className='contact__list-item'>
                <a
                    href='https://github.com/BergC'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <ion-icon name='logo-github'></ion-icon>
                </a>
            </li>
            <li className='contact__list-item'>
                <a
                    href='https://stackoverflow.com/users/11904900/paoiherpoais'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <ion-icon name='logo-stackoverflow'></ion-icon>
                </a>
            </li>
            <li className='contact__list-item'>
                <a href='mailto:christophertberg@gmail.com'>
                    <ion-icon name='mail'></ion-icon>
                </a>
            </li>
        </ul>
    </div>
);

export default Contact;
