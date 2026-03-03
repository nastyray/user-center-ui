import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'lilray技术出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro',
          title: 'lilray',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title:<><GithubOutlined /> lilray Github</>,
          href: 'https://github.com/nastyray',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'lilray',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
