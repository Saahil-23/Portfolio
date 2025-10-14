import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedHeading from '../common/AnimatedHeading';
import GlassCard from '../common/GlassCard';
import { articlesData } from '../../data/articles.js';

// --- STYLED COMPONENTS ---

const ArticlesSection = styled.section`
  padding: 100px 0;
`;

const ArticlesList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledArticleCard = styled(GlassCard)`
  padding: 2rem;
  
  // The title will now light up on hover!
  &:hover h3 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ArticleTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 0.75rem;
  transition: ${({ theme }) => theme.transition};
`;

const ArticleDescription = styled.p`
  color: ${({ theme }) => theme.colors.textDark};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ReadMoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.mono};
  text-decoration: none;

  span {
    transition: transform 0.3s ease;
  }

  &:hover span {
    transform: translateX(5px);
  }
`;

// --- ANIMATION VARIANTS ---

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// --- THE COMPONENT ---

const Articles = () => {
  return (
    <ArticlesSection id="articles">
      <AnimatedHeading number="03" title="My Articles & Insights" />
      <ArticlesList
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {articlesData.map((article, index) => (
          <motion.li key={index} variants={itemVariants}>
            <StyledArticleCard>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleDescription>{article.description}</ArticleDescription>
              <ReadMoreLink href={article.link} target="_blank" rel="noopener noreferrer">
                Read Full Article <span>&rarr;</span>
              </ReadMoreLink>
            </StyledArticleCard>
          </motion.li>
        ))}
      </ArticlesList>
    </ArticlesSection>
  );
};

export default Articles;