import JavaScript from '/assets/images/JavaScript.png';
import Yolo from '/assets/images/Yolo.png';
import Python from '/assets/images/python.png';
import ToolsCard from './ToolsCard';

const Tools = () => {
  return (
    <div className="wrapper">
      <h2 className="text-mini-title">Технологии</h2>

      <div className="grid-3-wrapper">
        <ToolsCard
          img={Python}
          name="Python"
          desc="Язык программирования. Применяется для работы нейросети."
        />
        <ToolsCard
          img={JavaScript}
          name="JavaScript"
          desc="Язык программирования. Служит проводником между интерфейсом и программой."
        />
        <ToolsCard
          img={Yolo}
          name="YOLOv8"
          desc="Быстрая и точная real-time нейросеть, которую мы обучили на выделенном датасете."
        />
        <ToolsCard
          name="OpenCV"
          desc="Библиотека алгоритмов компьютерного зрения и обработки изображений."
        />
        <ToolsCard
          name="Roboflow"
          desc="Фреймворк для создания моделей компьютерного зрения."
        />
        <ToolsCard
          name="Postman"
          desc="Сервис для тестирования работы API с сервером."
        />
        <ToolsCard
          name="Bun"
          desc="Сверхбыстрая среда выполнения JavaScript, менеджер пакетов и сборщик тестов."
        />
        <ToolsCard
          name="React"
          desc="Библиотека для создания пользовательских интерфейсов на JavaScript."
        />
        <ToolsCard
          name="Flask"
          desc="Микрофреймворк для создания веб-приложений на Python."
        />
        <ToolsCard
          name="Framer Motion"
          desc="Библиотека для создания плавных и отзывчивых анимаций."
        />
        <ToolsCard
          name="Tailwind CSS"
          desc="Фреймворк для CSS. Оптимизирует работу с вёрсткой контента."
        />
        <ToolsCard
          name="React-dropzone"
          desc="Библиотека для React, позволяющая делать продвинутые области прикрепления файлов."
        />
      </div>
    </div>
  );
};

export default Tools;
