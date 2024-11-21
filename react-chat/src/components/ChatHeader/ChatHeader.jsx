import ActionsButton from '../../common/components/ActionsButton/ActionsButton';
import Avatar from '../../common/components/Avatar/Avatar';
import BackButton from '../../common/components/BackButton/BackButton';
import SearchButton from '../../common/components/SearchButton/SearchButton';
import styles from './ChatHeader.module.scss';

export default function ChatHeader() {
    return (
        <header className={styles['header']}>
            <BackButton />
            <Avatar chatName={'Дженнифер'} info={'была 2 часа назад'}/>
            <div className={styles['header-buttons']}>
                <SearchButton />
                <ActionsButton />
            </div>
        </header>
    );
}