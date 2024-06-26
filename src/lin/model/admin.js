import { post, get, put, _delete } from '@/lin/plugin/axios'

export default class Admin {

    static GetPermissionNodes() {
        return get('cms/admin/permission/tree')
    }

    static async getUsers({ group_id,
        count = this.uCount,
        page = this.uPage,
        nickname,
        username,
        email
    }) {
        let res = await get('cms/admin/users', {
            count,
            page,
            group_id,
            nickname,
            username,
            email
        })
        return res
    }

    async nextGroupsPage() {
        await this.increaseGPage()
        return this.getGroupsWithPermissions({})
    }

    async preGroupsPage() {
        await this.decreaseGPage()
        return this.getGroupsWithPermissions({})
    }

    static async getGroups(query) {
        const groups = await get('cms/admin/group', query)
        return groups
    }

    static async getGroup(id) {
        const group = await get(`cms/admin/group/${id}`)
        return group
    }

    static async createGroup(name, info, permission_ids) {
        const res = await post('cms/admin/group', {
            name,
            info,
            permission_ids,
        })
        return res
    }

    static async updateGroup(data, id) {
        const res = await put(`cms/admin/group/${id}`, data)
        return res
    }

    static async deleteGroup(id) {
        const res = await _delete(`cms/admin/group/${id}`)
        return res
    }

    static async getUser(id) {
        const res = await get(`cms/admin/user/${id}`)
        return res
    }

    static async deleteUser(id) {
        const res = await _delete(`cms/admin/user/${id}`)
        return res
    }
    static async createUser(id, user) {
        const res = await put(`cms/admin/user/${id}`, user)
        return res
    }
    static async updateUser(id, user) {
        const res = await put(`cms/admin/user/${id}`, user)
        return res
    }

    static async dispatchPermissions(group_id, permission_ids) {
        const res = await post('cms/admin/permission/dispatch/batch', {
            group_id,
            permission_ids,
        })
        return res
    }

    static async changePassword(new_password, confirm_password, id) {
        const res = await put(`cms/admin/user/${id}/password`, {
            new_password,
            confirm_password,
        })
        return res
    }

    static async removePermissions(group_id, permission_ids) {
        const res = await post('cms/admin/permission/remove', {
            group_id,
            permission_ids,
        })
        return res
    }

    static async deletePermissionNode(permissionId) {
        return await _delete(`cms/admin/permission/${permissionId}`)
    }

    static async createPermissionNode(data) {
        return await post('cms/admin/permission', data)
    }

    static async updatePermissionNode(permissionId, data) {
        return await put(`cms/admin/permission/${permissionId}`, data)
    }

}
