import { Link } from 'react-router-dom';

const allCategories = {
  covers: {
    title: '"Cover Arts"',
    bg: '/images/common/covers-bg.webp',
    path: '/work/covers',
  },
  clothing: {
    title: '"Clothing"',
    bg: '/images/common/clothing-bg.webp',
    path: '/work/clothing',
  },
  posters: {
    title: '"Posters"',
    bg: '/images/common/posters-bg2.webp',
    path: '/work/posters',
  },
  typography: {
    title: '"Typography"',
    bg: '/images/common/typography-bg.webp',
    path: '/work/typography',
  },
};

export default function SeeAlso({ exclude = [] }) {
  const items = Object.entries(allCategories).filter(
    ([key]) => !exclude.includes(key)
  );

  return (
    <>
      <div className="project-page__divider" />
      <h3 className="project-page__section-title">See Also</h3>
      <div className="see-also">
        {items.slice(0, 3).map(([key, cat]) => (
          <Link to={cat.path} className="see-also__card" key={key}>
            <div className="see-also__card-bg">
              <img loading="lazy" src={cat.bg} alt="" />
            </div>
            <span className="see-also__card-title">{cat.title}</span>
            <span className="see-also__card-link">View →</span>
          </Link>
        ))}
      </div>
    </>
  );
}
