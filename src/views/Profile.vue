<template>
    <CustomerLayout>
        <div class="container mt-5 pt-5 bg_Profile">
        <div class="row bg_Profile">
            <div class="col-8 offset-2 col-md-8 offset-md-2 col-lg-3 offset-lg-2 mb-3">
                <div class="card">
                    <div class="card-header">
                    </div>
                    <div class="col-6 mx-auto my-2">
                        <img src="../assets/Admin.png" class="card-img-top img-thumbnail rounded mx-auto d-block" alt="..." />
                    </div>
                    <h3 class="card-title text-center mb-2">Juan dela Cruz</h3>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <span class="fw-bold">Customer No:</span> <span class="fw-normal">CUS-00010</span>
                        </li>
                        <li class="list-group-item">
                            <span class="fw-bold">Email:</span> <span class="fw-normal">admin@example.com</span>
                        </li>
                        <li class="list-group-item">
                            <span class="fw-bold">Contact No:</span> <span class="fw-normal">+966-11123-4567</span>
                        </li>
                    </ul>
                    <div class="card-footer text-muted text-end">
                        <a href="#" class="card-link">Update</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-10 offset-md-1 col-lg-5">
                <div class="card">
                    <div class="card-header">
                        <h4 class="mb-0">General Information</h4>
                    </div>
                    <div class="card-body">
                        <form>                
                            <div class="row justify-content-around">
                                <div class="col-4">
                                    <div class="mb-2">
                                        <label class="form-label fw-bold">Gender</label>
                                        <input type="text" class="form-control form-control-sm fw-normal" placeholder="Male" disabled />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="mb-2">
                                        <label class="form-label fw-bold">Age</label>
                                        <input type="number" class="form-control form-control-sm fw-normal" placeholder="35" disabled />
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-around">
                                <div class="col-4">
                                    <div class="mb-2">
                                        <label class="form-label fw-bold">Birthday</label>
                                        <input type="Date" class="form-control form-control-sm fw-normal" placeholder="04/12/1988" disabled />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="mb-2">
                                        <label class="form-label fw-bold">Position</label>
                                        <input type="text" class="form-control form-control-sm fw-normal" placeholder="Cashier" disabled />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label class="form-label fw-bolder mb-0 mt-2">Address</label>
                                </div>
                            </div>
                            <div class="row justify-content-around">
                                <div class="col-4">
                                    <div class="mb-2">
                                        <label class="form-label fw-bold">Street</label>
                                        <input type="text" class="form-control form-control-sm fw-normal" placeholder="Al Ta'aown Dist" disabled />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="mb-2">
                                        <label class="form-label fw-bold">P.O.Box</label>
                                        <input type="text" class="form-control form-control-sm fw-normal" placeholder="42456" disabled />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="mb-2">
                                        <label class="form-label fw-bold">City</label>
                                        <input type="text" class="form-control form-control-sm fw-normal" placeholder="Riyadh" disabled />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer text-muted text-end">
                        <a href="#" class="card-link">Update</a>
                    </div>
                </div>
                <div class="card mt-3 mt-md-3 mt-lg-3">
                    <div class="card-header">
                        <h4 class="mb-0">Other Information</h4>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt incidunt sapiente ut facere officia dignissimos, quidem commodi excepturi inventore, fugiat nostrum quibusdam possimus nihil officiis modi. Perferendis sequi dolorum maxime!</p>
                    </div>
                    <div class="card-footer text-muted text-end">
                        <a href="#" class="card-link">Update</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </CustomerLayout>
</template>
<script>

import CustomerLayout from "./layouts/CustomerLayout.vue";

export default {
    components: {
        CustomerLayout
    }
};
</script>

<style>
.bg_Profile {
    background-color: #d0a772;
    height: 100vh;
}
</style>