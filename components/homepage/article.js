import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import styles from './styles/article.module.css';
import Link from "next/link";

const Article = (props) => {
	const { title, description, date, link } = props;

	return (
		<>
			<div className={styles['homepage-article']}>
				<div className={styles["homepage-article-content"]}>
					<div className={styles["homepage-article-date"]}>
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className={styles["homepage-article-title"]}>{title}</div>
					<div className={styles["homepage-article-description"]}>
						{description}
					</div>
					<div className={styles["homepage-article-link"]}>
						<Link href={link}>
							Read article
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Article;
