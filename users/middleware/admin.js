export default function({$auth, redirect}) {
    // console.log($auth.state)
    if(!$auth.loggedIn) {
        redirect('/login')
    }
    if($auth.state.user.role !== 'admin') {
        redirect('/login')
    }
}