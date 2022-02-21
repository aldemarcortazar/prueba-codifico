
import './Messague.scss';


interface ImessagueProps{
    className: string
}

const Messague: React.FunctionComponent<ImessagueProps> = ({ className,children }) => {

    return(
        <div className={ `messague ${className}`  }>
            { children }
        </div>
    );
}

export default Messague;