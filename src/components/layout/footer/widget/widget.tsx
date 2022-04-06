import Container from '@components/ui/container';
import WidgetLink from './widget-link';
import WidgetAbout from './widget-about-us';
import { footer } from '../data';

interface WidgetsProps {
  widgets: {
    id: number;
    widgetTitle: string;
    lists: any;
  }[];
}

const Widgets: React.FC<WidgetsProps> = ({ widgets }) => {
  const { social } = footer;
  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-10 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 pb-[50px]">
        <WidgetAbout
          social={social}
          className="col-span-full sm:col-span-1 md:col-span-3 border-b sm:border-b-0 border-skin-three mb-4 sm:mb-0"
        />
        {widgets?.map((widget) => (
          <WidgetLink
            key={`footer-widget--key${widget.id}`}
            data={widget}
            className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2"
          />
        ))}
      </div>
    </Container>
  );
};

export default Widgets;
