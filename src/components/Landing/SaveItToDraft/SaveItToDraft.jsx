import './SaveItToDraft.sass';
import draftsImg from '../../../images/lan-drafts.jpg';
import templateImg from '../../../images/lan-unfinished-template.jpg';
import arrowImg from '../../../images/lan-arrow.svg';

export default function SaveItToDraft() {
    return (
        <section className='save-it-to-draft'>
            <h2 className='save-it-to-draft__title'>Сохраняйте незаконченные шаблоны в черновики</h2>
            <p className='save-it-to-draft__subtitle'>Нет времени заполнить документ полностью? Не беда! 
                <br /> Незаконченные документы отправляются в черновики, где вы можете найти свой документ и продолжить заполнять 
                его с того места на котором остановились.
            </p>
            <div className='save-it-to-draft__illustration-container'>
                    <img className='save-it-to-draft__illustration' src={draftsImg} alt='Черковики'/>
                    <img className='save-it-to-draft__arrow' src={arrowImg} alt='Стрелочка'/>
                    <img className='save-it-to-draft__illustration' src={templateImg} alt='Незавершенный шаблон'/>
                </div>
        </section>
    );
};
