import {
    Line,
    Title,
    TitleLineWrapper
} from './styles';

const Logo: React.FC = () => {
    return (
        <TitleLineWrapper>
            <Title>TGL</Title>
            <Line />
        </TitleLineWrapper>
    )
}

export default Logo;