export default function({$auth, redirect}) {
    if($auth.state.user.role !== 'admin') {
        redirect('/login')
    }
}