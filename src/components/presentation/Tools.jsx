import JavaScript from '/assets/images/JavaScript.png';
import LLaMa from '/assets/images/LLaMa.jpeg';
import Python from '/assets/images/python.png';
import ToolsCard from './ToolsCard';

const Tools = () => {
    return (
        <div className="wrapper">
            <h2 className="text-mini-title">Технологии</h2>

            <div className="grid-3-wrapper">
                <ToolsCard
                    img={Python}
                    name={'Python'}
                    desc={
                        'Язык программирования. Применяется для работы нейросети.'
                    }
                />
                <ToolsCard
                    img={JavaScript}
                    name={'JavaScript'}
                    desc={
                        'Язык программирования. Служит проводником между интерфейсом и программой.'
                    }
                />
                <ToolsCard
                    img={LLaMa}
                    name={'LLaMa'}
                    desc={
                        'Приватная языковая модель, разворачиваемая на локальном сервере.'
                    }
                />
                <ToolsCard
                    name={'Pdftables'}
                    desc={'Библиотека для перевода PDF-файлов в Excel-формат.'}
                />
                <ToolsCard
                    name={'Openpyxl'}
                    desc={'Библиотека для продвинутой работы с Excel-файлами.'}
                />
                <ToolsCard
                    name={'Fire'}
                    desc={
                        'Библиотека, необходимая для корректной работы языковой модели.'
                    }
                />
                <ToolsCard
                    name={'Bun'}
                    desc={
                        'Сверхбыстрая среда выполнения JavaScript, менеджер пакетов и сборщик тестов.'
                    }
                />
                <ToolsCard
                    name={'React'}
                    desc={
                        'Библиотека для создания пользовательских интерфейсов на JavaScript.'
                    }
                />
                <ToolsCard
                    name={'Flask'}
                    desc={
                        'Микрофреймворк для создания веб-приложений на Python.'
                    }
                />
                <ToolsCard
                    name={'HTML'}
                    desc={
                        'Язык разметки, на нём строится структура веб-сайта и приложения.'
                    }
                />
                <ToolsCard
                    name={'SCSS'}
                    desc={
                        'Препроцессор для CSS. Оптимизирует работу с вёрсткой контента.'
                    }
                />
                <ToolsCard
                    name={'React-dropzone'}
                    desc={
                        'Библиотека для React, позволяющая делать продвинутые области прикрепления файлов.'
                    }
                />
            </div>
        </div>
    );
};

export default Tools;
