import './AndElse.sass';
import Figure from './Figure/Figure';
import checkboxImg from '../../../images/lan-checkbox.svg';
import clockImg from '../../../images/lan-clock.svg';
import smileImg from '../../../images/lan-smile.svg';
import downloadImg from '../../../images/lan-download.svg';



export default function AndElse() {
    return (
        <section className='and-else'>
            <h2 className='and-else__title'>А еще можно...</h2>
            <div className='and-else__container'>
                <Figure image={checkboxImg} title='Избежать ошибок' subtitle='При заполнении документов'/>
                <Figure image={clockImg} title='Сэкономить время' subtitle='И потратить его на более важные и приятные дела'/>
                <Figure image={smileImg} title='Быть спокойным' subtitle='Что документ заполнен по корректной и актуальной форме'/>
                <Figure image={downloadImg} title='Скачать файл' subtitle='Готовый к печати и отправке по электронной почте'/>
            </div> 
        </section>
    );
};
