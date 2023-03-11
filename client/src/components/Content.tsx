import 'macro-css';
import InfoBlock from './MainPageComponents/InfoBlock';
import ImageBlock from './MainPageComponents/ImageBlock';
import RecommendationBlock from './MainPageComponents/RecommedationBlock';
import TemplatesBlock from './MainPageComponents/TemplatesBlock';
import QuestionsBlock from './MainPageComponents/QuestionsBlock';

function Content() {
  return (
    <div className='content mt-50 pb-50'>
      <InfoBlock />
      <ImageBlock />
      <TemplatesBlock />
      <RecommendationBlock />
      <QuestionsBlock />
    </div>
  );
}

export default Content;
