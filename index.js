//**************JS**************
/* let optContainer = document.getElementById("menue");
let opts = optContainer.getElementsByClassName("opt");
for (let i = 0; i < opts.length; i++) {
    opts[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
} */

//**************jQuery**************
$(document).ready(function () {
    $('.opt').bind('click', function () {
        // remove the active class from all elements with active class
        $('.active').removeClass('active')
        // add active class to clicked element
        $(this).addClass('active');
    });
});

function show1() {
    $(".content").empty();
    $(".content").append(
        `<form id="1">
        <div class="row">
            <div class="label">
                <span>First Name</span>
            </div>
            <div><input type="text" id="fname"></div>
        </div>
        <div class="row">
            <div class="label">
                <span>Middle Name</span>
            </div>
            <input type="text" id="mname">
        </div>
        <div class="row">
            <div class="label">
                <span>Last Name</span>
            </div>
            <input type="text" id="lname">
        </div>
        <div class="row">
            <div class="label">
                <span>Gender</span>
            </div>
            <div>
                <select name="gender" id="gender">
                    <option value="select">Select</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="none">Prefer not to identify</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="label">
                <span>Date of Birth</span>
            </div>
            <div>
                <input type="date" id="birthDate">
            </div>
        </div>
        <div class="row">
            <div class="label">
                <span>Medical Record Identifier</span>
            </div>
            <div>
                <input type="text" id="mri">
            </div>
        </div>
        <div class="row">
            <div class="label">
                <span>Phone Number</span>
            </div>
            <div>
                <input type="text" id="phone">
            </div>
        </div>
        <div class="row">
            <div class="label optional">
                <span>Mobile Number</span></br>
                <span style="color:silver;">(Optional)</span>
            </div>
            <div>
                <input type="text" id="mobile">
            </div>
        </div>
        <div class="row">
            <div class="label optional">
                <span>Email</span></br>
                <span style="color:silver;">(Optional)</span>
            </div>
            <div>
                <input type="text" id="email">
            </div>
        </div>
    </form>`
    )
}

function show2() {
    $(".content").empty();
    $(".content").append(
        `<form id="2">
    <div class="row">
        <div class="label">
            <span>First Name</span>
        </div>
        <div><input type="text" id="fname"></div>
    </div>
    <div class="row">
        <div class="label">
            <span>Last Name</span>
        </div>
        <input type="text" id="lname">
    </div>
    <div class="row">
        <div class="label optional">
            <span>Phone Number</span></br>
            <span style="color:silver;">(Optional)</span>
        </div>
        <div>
            <input type="text" id="phone">
        </div>
    </div>
    <div class="row">
        <div class="label optional">
            <span>Mobile Number</span>
        </div>
        <div>
            <input type="text" id="mobile">
        </div>
    </div>
    <div class="row">
        <div class="label">
            <span>Email</span>
        </div>
        <div>
            <input type="text" id="email">
        </div>
    </div>
    <div class="row">
        <div class="label optional">
            <span>Relationship to Patient</span></br>
            <span style="color:silver;">(Optional)</span>
        </div>
        <div>
            <input type="text" id="relationship">
        </div>
    </div>
    <div class="row">
        <div class="label">
            <span></span>
        </div>
        <div class="checkbox">
            <input type="checkbox" id="approval">
            <span>Received HIPAA approval for caregiver</span>
        </div>
    </div>
    <div class="row">
        <div class="label">
            <span></span>
        </div>
        <div class="add">
            <span id="add">+ Add Another Caregiver</span>
        </div>
    </div>
</form>`)

}

function show3() {
    $(".content").empty();
    $(".content").append(`
    <form id="3">
    <div class="row">
        <div class="label">
            <span>Practitioner Description</span>
        </div>
        <div>
            <select name="practitioner" id="practitioner">
                <option value="select">Please select</option>
                <option value="primary">Primary Care Physician</option>
                <option value="specialist">Speciality Physician</option>
                <option value="manager">Case Manager</option>
                <option value="nurse">Nurse</option>
                <option value="other">Other</option>
            </select>
        </div>
    </div>
    <div class="row">
        <div class="label">
            <span>Full Name</span>
        </div>
        <div>
            <input list="practitioners">
            <datalist id="practitioners">
                <option value="Aaron Goldman">
                <option value="Irena Mint">
                <option value="John Boss">
                <option value="John Daw">
                <option value="Artur Green">
            </datalist>
        </div>
    </div>

    <div class="row">
        <div class="label optional">
            <span>Phone</span></br>
            <span style="color:silver;">(Optional)</span>
        </div>
        <div>
            <input type="text" id="phone">
        </div>
    </div>
    <div class="row">
        <div class="label optional">
            <span>Email</span></br>
            <span style="color:silver;">(Optional)</span>
        </div>
        <div>
            <input type="text" id="email">
        </div>
    </div>
    <div class="row">
        <div class="label optional">
            <span>Fax</span></br>
            <span style="color:silver;">(Optional)</span>
        </div>
        <div>
            <input type="text" id="fax">
        </div>
    </div>
    <div class="row">
        <div class="label">
            <span>Primary Method of Contact</span>
        </div>
        <div class="checkbox">
            <input type="checkbox" id="approval">
            <span>Phone</span>
            <input type="checkbox" id="approval">
            <span>Email</span>
            <input type="checkbox" id="approval">
            <span>Fax</span>
        </div>
    </div>
    <div class="row">
        <div class="label">
            <span></span>
        </div>
        <div class="add">
            <span id="add">+ Add Another Practitioner</span>
        </div>
    </div>
</form>
    `)
}

function show4() {
    $(".content").empty();
    $(".content").append(`
    <form id="4">
        <div class="row">
            <div class="label">
                <span>Program Name</span>
            </div>        
            <div>
                <select name="program" id="program">
                    <option value="select">Select Program</option>
                    <option value="oncology">NovoLog - Oncology</option>
                    <option value="rayaldi">NovoLog - Rayaldi</option>
                    <option value="heart">Sinai Hospital - Heart Failure</option>
                </select>
            </div>
        </div>
    </form>
    `)
}

function show5() {
    $(".content").empty();
    $(".content").append(`
    <form id="4">
        <div class="row">
           Under Construction
        </div>
    </form>
    `)
}

function show6() {
    $(".content").empty();
    $(".content").append(`
    <form id="4">
        <div class="row">
           Under Construction
        </div>
    </form>
    `)
}

function show7() {
    $(".content").empty();
    $(".content").append(`
    <form id="4">
        <div class="row">
           Under Construction
        </div>
    </form>
    `)
}