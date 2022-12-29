export const joinText = (text: string) => {
    let joinedText = text.split(' ');
    let newText = ""
    joinedText.forEach(text => {
        newText += text
    });
    return newText
}