import React, { Component } from 'react';
import './Articles.css'

import { InlineMath } from 'react-katex';

import image1 from '../../img/article/article2/article1.jpg';
import image2 from '../../img/article/article2/article2.jpg';
import image3 from '../../img/article/article2/article3.jpg';
import image4 from '../../img/article/article2/article4.jpg';

class Article1 extends Component {
  render() {
    const { width, height, scale } = this.props;
    const style = {
      width: width * scale,
      height: height * scale,
      fontSize: 28 * scale,
      padding: 170 * scale,
      textIndent: 28 * scale / 2 * 5,
      fontFamily: "Times new Roman, serif"
    }

    return (
      <div className="document">
        <div className="page" style={style}>
          <p className="udk">УДК 621.313.17:621.3.07</p>
          <h1 className="title">Управление бесколлекторными системами на базе AVR систем</h1>
          <br />
          <h1 className="name">М.Ю. Жигарев</h1>
          <h2 className="university">ГВУЗ «Донецкий национальный технический университет», Донецк</h2>
          <h2 className="university">Институт гражданской защиты Донбасса</h2>
          <h2 className="university">Инновационные перспективы Донбасса / Материалы II Международной научно-практической конференции — Донецк, ДонНТУ — 2016. — 4 с.</h2>
          <br />
          <p className="annotation">В работе представлена система управления для бесколлекторного трехфазного двигателя, реализованная на базе микроконтроллера и силовых ключей, коммутирующих обмотки; предложен физический вариант реализации системы управления для бесколлекторного двигателя с внешним вращающимся ротором.</p>
          <br />
          <p className="paragraph">В настоящее время широко распространены различные виды радиоуправляемых воздушных моделей. Одной из отличительных особенностей таких моделей является использование бесколлекторных двигателей [3].</p>
          <p className="paragraph">Бесколлекторный двигатель – это замкнутая электромеханическая система, состоящая из синхронной машины с трапецеидальным распределением магнитного поля в зазоре, датчика положения ротора, преобразователя координат и усилителя мощности. Механическая и регулировочная характеристики бесколлекторного двигателя линейны и идентичны механической и регулировочной характеристикам электродвигателя постоянного тока. Сходством электродвигателей постоянного тока бесколлекторных двигателей является работа от сети постоянного тока [2].</p>
          <p className="paragraph">В англоязычной литературе такие двигатели обычно рассматриваются в составе электропривода и упоминаются под аббревиатурами PMSM (Permanent Magnet Synchronous Motor) или BLDC (Brushless Direct Current Motor). Стоит отметить, что аббревиатура PMSM в англоязычной литературе чаще используется для обозначения самих синхронных машин с постоянными магнитами и с синусоидальной формой фазных обратных ЭДС (ОЭДС), в то время как аббревиатура BLDC аналогична русской аббревиатуре БДПТ и относится к двигателям с трапецеидальной формой ОЭДС (если иная форма не оговорена специально).[2]</p>
          <p className="paragraph">Вообще говоря, бесколлекторный двигатель не является электрической машиной в традиционном понимании, поскольку его проблематика затрагивает ряд вопросов, связанных с теорией электропривода и систем автоматического управления: структурная </p>
        </div>
        <div className="page" style={style}>
          <p className="paragraph-extension">организация, использование датчиков и электронных компонентов, а также программное обеспечение.[2]</p>
          <p className="paragraph">Бесколлекторные трехфазные двигатели постоянного тока (БТДПТ) характеризуются небольшой инерционностью ротора, т.к. обмотки расположены на статоре. Коммутация управляется электроникой. Моменты коммутации определяются путем измерения обратной ЭДС, генерируемой обмотками. Схема замещения бесколлекторного трехфазного двигателя представлена на рисунке 1 [4].</p>
          <p className="image-container"><img src={image1} alt="Схема замещения БТДПТ" width={400 * scale} /></p>
          <p className="image-description">Рисунок 1 – Схема замещения БТДПТ</p>
          <br />
          <p className="paragraph">От силы магнитного поля зависит мощность и частота вращения двигателя. Регулировать частоту вращения и вращающий момент двигателя можно за счет изменения тока через обмотки. Наиболее распространенный способ управления током через обмотки является управление средним током. Для этого используется широтно-импульсная модуляция (ШИМ), рабочий цикл которой определяет среднее значение напряжения на обмотках, а, следовательно, и среднее значение тока и, как следствие, частоту вращения [3].</p>
          <p className="paragraph">Управление переключением фаз БТДПТ происходит посредством измерения обратных ЭДС, возникающих при вращении катушки в магнитном поле. Типичный вид ОЭДС для БТДПТ представлен на рисунке 2 [3].</p>
          <br />
          <p className="image-container"><img src={image2} alt="ВИД ОЭДС для БТДПТ" width={515 * scale} /></p>
          <p className="image-description">Рисунок 2 – ВИД ОЭДС для БТДПТ</p>
        </div>
        <div className="page" style={style}>
          <p className="paragraph">В момент, когда ОЭДС на первой фазе имеет положительное значение, вторая - отрицательное, а ОЭДС на третьей в это время имеет нулевое значение. На третьей обмотке возникает состояние, когда напряжение пересекается со средним напряжением, которое получается в результате сложения положительной и отрицательной ОЭДС. Пересечение со средней линией происходит между двух коммутаций. При постоянной скорости вращения двигателя, временной промежуток от коммутации до пересечения со средним напряжением равен промежутку времени от пересечения средней линии до момента следующего переключения [1].</p>
          <p className="paragraph">Если следовать последовательности коммутаций, представленной на рисунке 2, то получим шесть различных векторов магнитного потока, соответствующих шести ступеням коммутации. Шесть ступеней соответствуют одному обороту ротора [3].</p>
          <p className="paragraph">На рисунке 3 представлена схема переключения обмоток БТДПТ.</p>
          <p className="image-container"><img src={image3} alt="Схема переключения обмоток БТДПТ" width={338 * scale} /></p>
          <p className="image-description">Рисунок 3 – Схема переключения обмоток БТДПТ</p>
          <br />
          <p className="paragraph">Где <InlineMath>V_a</InlineMath>, <InlineMath>V_b</InlineMath> и <InlineMath>V_c</InlineMath> – напряжения на соответствующих фазах, а <InlineMath>V_n</InlineMath> – напряжение виртуальной нейтральной точки.</p>
          <p className="paragraph">Структурная схема, осуществляющая управление БТДПТ представлена на рисунке 4.</p>
          <br />
          <p className="image-container"><img src={image4} alt="Структурная схема управления БТДПТ" width={488 * scale} /></p>
          <p className="image-description"> Рисунок 4 – Структурная схема управления БТДПТ</p>
          <br />
        </div>
        <div className="page" style={style}>
          <p className="paragraph">Микроконтроллер производит коммутацию обмоток, путем управления транзисторными ключами. В качестве микроконтроллера (МК) используются микроконтроллеры семейства AVR, имеющие встроенный аналого-цифровой преобразователь [1].</p>
          <p className="paragraph">Силовой каскад предназначен для управления коммутацией обмоток. Данная схема содержит три каскада переключения обмоток БТДПТ, по количеству обмоток двигателя. Каждый каскад состоит из комплементарной пары полевых транзисторов. Использование полевых транзисторов обусловлено наличием больших токов [1].</p>
          <p className="paragraph">Обработка сигналов обратной ЭДС осуществляется для снятия напряжения с нейтральной точки, необходимое для определения точного момента переключения обмоток бесколлекторного двигателя. Напряжения 3 фаз должны быть подключены к входам АЦП МК посредством схем делителя напряжения (ДН) или фильтра нижних частот (ФНЧ). Фильтры должны иметь тот же коэффициент передачи, что и фильтр опорного напряжения АЦП МК (вывод AREF). Это позволит использовать весь диапазон преобразования АЦП. Фильтр низких частот должен обеспечивать как можно более полную фильтрацию высокочастотного шума, но при этим не должен вносить существенных задержек сигнала обратной ЭДС [1].</p>
          <br />
          <p className="conclusions-title">Выводы</p>
          <p className="conclusions">Разработка программы управления БТДПТ является одной из основных задач при построении радиоуправляемых моделей. Правильная настройка регулятора оборотов БТДПТ является хорошим фундаментом для создания сложных систем управления.</p>
          <p className="conclusions">Система управления на базе БТДПТ может иметь применение в ряде приложений. Например, может быть использована как система слежения за определенными объектами. На базе системы управления с БТДПТ может быть построено беспилотное транспортное средство, которое способно выполнять различные функции, заложенные в программе автопилота.</p>
          <br />
          <p className="list-of-sources-title">Библиографический список</p>
          <ul className="list-of-sources">
            <li>
              <span>1.</span>
              AVR444: Управление трехфазным бесколлекторным электродвигателем постоянного тока без датчиков [Электронный ресурс] – Режим доступа: <a className="link" target="_blank" href="http://www.atmel.com/images/doc8012.pdf" rel="noopener noreferrer">http://www.atmel.com/images/doc8012.pdf</a>
            </li>
            <li>
              <span>2.</span>
              Вентильный двигатель [Электронный ресурс] / Википедия — свободная энциклопедия: Вентильный двигатель. – Режим доступа: <a target="_blank" className="link" href="https://ru.wikipedia.org/wiki/Вентильный_двигатель" rel="noopener noreferrer">https://ru.wikipedia.org/wiki/Вентильный_двигатель</a>
            </li>
            <li>
              <span>3.</span>
              Саяпин В.Е., Смурыгин И.М. Система управления трехфазного бесколлекторного двигателя постоянного тока / Саяпин В.Е.. Смурыгин И.М. / Молодежный научно-технический вестник – 2012.
            </li>
            <li>
              <span>4.</span>
              AVR492: Управление бесколлекторным электродвигателем постоянного тока с помощью AT90PWM3 [Электронный ресурс] – Режим доступа: <a target="_blank" className="link" href="http://www.gaw.ru/pdf/Atmel/app/avr/AVR492.pdf" rel="noopener noreferrer">http://www.gaw.ru/pdf/Atmel/app/avr/AVR492.pdf</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Article1;
