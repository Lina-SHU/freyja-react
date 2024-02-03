export default {
    setToken(token: string) {
        document.cookie = `FToken=${token}; expires=path=/`;
    },
    getToken() {
        return document.cookie.replace(
            /(?:(?:^|.*;\s*)FToken\s*=\s*([^;]*).*$)|^.*$/,
            "$1"
        );
    }
}