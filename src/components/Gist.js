import styled from "styled-components";
import GistUserIcons from "./GistUserIcons";

const Gist = ({ gist }) => {

    // Convert the input date string into a Date object
    const createdAtObj = new Date(gist.created_at);

    // Format the date as MM/DD/YYYY
    const created_at = createdAtObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

     // Convert the input date string into a Date object
        const updatedAtObje = new Date(gist.updated_at);

      // Format the date as MM/DD/YYYY
        const updated_at = updatedAtObje.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        });

        const totalFiles = Object.keys(gist.files).length;
        const filenames = Object.keys(gist.files);

  return (
    <Container>
      <InformationBar>
      <ImageTextDiv>
      <Image src={gist.owner.avatar_url} />
      <TextPara>{gist.owner.login}</TextPara>
      </ImageTextDiv>
      <div>
        <GistUserIcons comment={gist.comments} files={totalFiles} />
      </div>
      </InformationBar>
      <DateInfoBar>
          <SmallParas>Created at: {created_at}</SmallParas>
          <SmallParas>Updated at: {updated_at}</SmallParas>
      </DateInfoBar>
      <DescParas>
        {gist.description}
      </DescParas>
      <FileNames>
        {filenames.map(filename => <p key={filename}>{filename}</p>)}
      </FileNames>
    </Container>
  )
}

const Container = styled.div`
  max-width: 600px;
  margin: 1rem auto;
  border-bottom: 1px solid #cccccc;
  padding: 0 10px;
`;

const Image = styled.img`
 width: 40px;
 height: 40px;
 border-radius: 50%;
`;

const InformationBar = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
@media (max-width: 620px) {
  flex-direction: column;
}
`;

const ImageTextDiv = styled.div`
display: flex;
gap: 0.5rem;
align-items: center;
`;

const TextPara = styled.div`
color: #1B73DA;
font-size: 0.8rem;
font-weight: bold;
`;

const DateInfoBar = styled.div`
display: flex;
gap: 1rem;
margin: 1rem 0;
`;

const SmallParas = styled.div`
font-size: 0.7rem;
color: rgb(185 181 181);
font-weight: bold;
`

const DescParas = styled.div`
font-size: 1.2rem;
overflow-wrap: break-word;
`;

const FileNames = styled.div`
display: flex;
gap: 1rem;
color: #1B73DA;
font-size: 0.7rem;
font-weight: bold;
margin: 1rem 0;
overflow-wrap: break-word;

@media (max-width: 600px) {
  flex-direction: column;
  gap: 0.2rem;
}
`;

export default Gist;
