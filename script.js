// ฐานข้อมูลเกณฑ์ผู้ตรวจฎีกา
const inspectorRules = [
  { dept: 'สำนักศึกษา', work: 'สำนักศึกษา ศาสนาและวัฒนธรรม (ฝ่ายบริหารการศึกษา , ฝ่ายส่งเสริมศาสนา ศิลปะและวัฒนธรรม )', inspector: 'เสงี่ยมจิต (พี่นาย)' },
  { dept: 'สำนักศึกษา', work: '(ฝ่ายบริหารงานทั่วไป , ฝ่ายส่งเสริมคุณภาพการศึกษา , ฝ่ายการศึกษานอกระบบและตามอัธยาศัย , กลุ่มงานนิเทศติดตามและประเมินผลการจัดการศึกษา)', inspector: 'เทวรินทร์ (พี่เอ๋)' },
  { dept: 'สำนักศึกษา', work: 'สำนักศึกษา ฝ่ายส่งเสริมกีฬาและนันทนาการ (ศูนย์เยาวชน)', inspector: 'กาญจนา (พี่อึ่ง)' },
  { dept: 'ยุทธศาสตร์', work: 'กองยุทธศาสตร์และงบประมาณ', inspector: 'ศิวโรจน์ (พี่อาน)' },
  { dept: 'กองป้องกัน', work: 'กองป้องกันและบรรเทาสาธารณภัย', inspector: 'เสงี่ยมจิต (พี่นาย)' },
  { dept: 'กองป้องกัน', work: '(ฝ่ายส่งเสริมการท่องเที่ยว)', inspector: 'เทวรินทร์ (พี่เอ๋)' },
  { dept: 'สำนักปลัด', work: 'ฝ่ายนิติการ (ค่าธรรมเนียม)', inspector: 'กาญจนา (พี่อึ่ง)' },
  { dept: 'สำนักปลัด', work: 'สำนักปลัด วัยทองฯ ฝ่ายสถานสงเคราะห์', inspector: 'เกศินี (พี่เกศ)' },
  { dept: 'สำนักปลัด', work: 'สำนักปลัด ฝ่ายอำนวยการ งานบริหารทั่วไป (ค่ารับรอง ค่าใช้จ่ายในการประชุม)', inspector: 'รัฐภัทร (พี่กิ๊ก)' },
  { dept: 'สาธารณสุข', work: 'ฝ่ายบริหารงานสาธารณสุข / ฝ่ายบริการสาธารณสุข / จ้างเหมา รวีวรรณ, อังคณา, ธีรฉัตร, กฤษณา, นภัสวรรณ, พัทชญา, สุรารัตน์, ณัฐพร, กฤศณัฏฐ์, กรพินทา', inspector: 'เสงี่ยมจิต (พี่นาย)' },
  { dept: 'สาธารณสุข', work: 'ฝ่ายบริหารงานทั่วไป / จ้างเหมา ศุภกาญจน์', inspector: 'กุณฑลี (พี่นอแนน)' },
  { dept: 'เลขานุการ', work: 'สำนักเลขากระทรวงฯ ค่าตอบแทนคณะกรรมการสำนักงานเลขาฯ', inspector: 'กาญจนา (พี่อึ่ง)' },
  { dept: 'กจ.', work: 'กองการเจ้าหน้าที่', inspector: 'รัฐภัทร (พี่กิ๊ก)' },
  { dept: 'สำนักคลัง', work: 'ส่วนบริหารงานพัสดุและทรัพย์สิน (ยกเว้น ถอนเงินรับฝากประกันสัญญา / งบบุคลากร)', inspector: 'ชนันท์ธิดา (พี่กุ้ง)' },
  { dept: 'สำนักคลัง', work: 'ส่วนบริหารงานคลัง / หน่วยตรวจสอบฯ / ค่าตอบแทนคณะกรรมการกองคลัง (บ.ทั่วไป)', inspector: 'ศิริพร (พี่แนนนี่)' },
  { dept: 'สำนักคลัง', work: 'สำนักช่าง (งานสิ่งแวดล้อมและทรัพยากรธรรมชาติ) / งานก่อสร้าง / จ่ายขาดเงินสะสม / งบกลาง เงินสำรองจ่าย โซนใต้ อ.หางดง สันป่าตอง แม่วาง ดอยหล่อ จอมทอง ฮอด ดอยเต่า อมก๋อย แม่แจ่ม กัลยาณิวัฒนา', inspector: 'ชนันท์ธิดา (พี่กุ้ง)' },
  { dept: 'สำนักคลัง', work: '( ค่าวัสดุก่อสร้าง , ค่าวัสดุเชื้อเพลิงและหล่อลื่น)', inspector: 'กาญจนา (พี่อึ่ง)' },
  { dept: 'สำนักช่าง', work: 'งานก่อสร้าง จ่ายขาดเงินสะสม , งบกลาง เงินสำรองจ่าย อ.เมือง อ.แม่ออน อ.สันกำแพง อ.สันทราย อ.สารภี, ฝ่ายบริหารงานทั่วไปเกี่ยวกับอุตสาหกรรมและโยธา / ค่าบำรุงรักษาและซ่อมแซม / ค่าตอบแทนและค่าสาธารณูปโภค / ค่าลงทะเบียนฝึกอบรม) ยกเว้น ค่าซ่อมแซมเครื่องจักรกล', inspector: 'สุดารัตน์ (พี่อ้อย)' },
  { dept: 'สำนักช่าง', work: 'ค่าซ่อมแซมเครื่องจักรกล / งานกำจัดขยะมูลฝอยและสิ่งปฏิกูล / งานก่อสร้าง รายจ่ายเพื่อให้ได้มาซึ่งบริการ / ค่าวัสดุ (ยกเว้นค่าวัสดุก่อสร้างและค่าวัสดุน้ำมันเชื้อเพลิงและหล่อลื่น)', inspector: 'กุณฑลี (พี่นอแนน)' },
  { dept: 'สำนักช่าง', work: 'งานก่อสร้าง , จ่ายขาดเงินสะสม , งบกลาง เงินสำรองจ่าย อ.ไชยปราการ ดอยสะเก็ด ฝาง พร้าว แม่แตง แม่ริม เชียงดาว แม่อาย เวียงแหง สะเมิง / วัสดุไฟฟ้าและวิทยุ/ วัสดุยานพาหนะและขนส่ง / วัสดุวิทยาศาสตร์/ วัสดุการเกษตร / วัสดุเครื่องแต่งกาย / วัสดุจราจร / ค่าครุภัณฑ์ / ค่าตอบแทนคณะกรรมการสำนักช่างตามอำเภอที่รับผิดชอบ', inspector: 'ศรีวรรณ (พี่ศรี)' },
  { dept: 'สำนักช่าง', work: 'จ้างเหมาบุคคลภายนอกช่วยปฏิบัติงานของสำนักช่าง', inspector: 'รัฐภัทร (พี่กิ๊ก)' },
  { dept: 'สำนักช่าง', work: 'ภาษี ณ ที่จ่าย', inspector: 'วิวัฒน์ (พี่แบรน)' },
  { dept: 'สำนักช่าง', work: '(ค่าเบี้ยเลี้ยง)', inspector: 'ธนวรรณ (พี่หน่อย)' },
  { dept: 'สวัสดิการ/อื่นๆ', work: 'ค่าเดินทางไปราชการและค่าข้าวย้าย ทุกหน่วยงาน / ถอนเงินประกันสัญญา หลักประกันซอง เงินประกันผลงาน', inspector: 'เกศินี (พี่เกศ)' },
  { dept: 'สวัสดิการ/อื่นๆ', work: 'ค่าเช่าบ้าน / ค่ารักษาพยาบาล / ค่าการศึกษาบุตร / กบข. กสจ.', inspector: 'กุลกาญจน์ (พี่ไอซ์)' },
  { dept: 'สวัสดิการ/อื่นๆ', work: 'เงินเดือนปกติ ค่าตอบแทนแพทย์และเภสัชกองสาธารณฯ ฉ.11 (ค่าตอบแทนผู้ปฏิบัติราชการประกันสังคม)', inspector: 'นันท์นลิน (พี่จุ๋ม)' },
  { dept: 'สวัสดิการ/อื่นๆ', work: 'ตรวจฎีกา ของกองทุนประกันสุขภาพระดับ จ.เชียงใหม่', inspector: 'กุณฑลี (พี่นอแนน)' }
];

let dikkaData = JSON.parse(localStorage.getItem('dikkaData')) || [];

window.onload = function() {
  if (document.getElementById('dikkaDate')) {
    document.getElementById('dikkaDate').valueAsDate = new Date();
    initDeptDropdown('deptSelect');
  }
  if (document.getElementById('dikkaBody')) {
    renderDikkaTable();
    initDeptDropdown('editDeptSelect');
  }
  if (document.getElementById('inspectorBody')) {
    renderInspectorTable();
  }
};

// โหลดตัวเลือกกองลงใน Dropdown (ใช้ได้ทั้งหน้า 1 และหน้า Modal แก้ไข)
function initDeptDropdown(elementId) {
  const select = document.getElementById(elementId);
  if (!select) return;

  select.innerHTML = '<option value="">-- เลือกแผนงาน / งาน / รายการ --</option>';
  inspectorRules.forEach((rule, index) => {
    select.innerHTML += `<option value="${index}">[${rule.dept}] ${rule.work}</option>`;
  });
}

// อัตโนมัติสำหรับหน้าแรก
function autoMatchInspector() {
  const selectIndex = document.getElementById('deptSelect').value;
  const inspectorInput = document.getElementById('inspectorInput');
  if (selectIndex !== "") {
    inspectorInput.value = inspectorRules[selectIndex].inspector;
  } else {
    inspectorInput.value = '';
  }
}

// อัตโนมัติสำหรับ Modal แก้ไข
function autoMatchEditInspector() {
  const selectIndex = document.getElementById('editDeptSelect').value;
  const inspectorInput = document.getElementById('editInspector');
  if (selectIndex !== "") {
    inspectorInput.value = inspectorRules[selectIndex].inspector;
  } else {
    inspectorInput.value = '';
  }
}

function togglePayeeInput() {
  const payeeType = document.querySelector('input[name="payeeType"]:checked').value;
  const payeeInput = document.getElementById('payee');

  if (payeeType === 'ktb') {
    payeeInput.value = 'KTB corporate';
    payeeInput.readOnly = true;
    payeeInput.classList.add('auto-filled');
  } else {
    payeeInput.value = '';
    payeeInput.readOnly = false;
    payeeInput.classList.remove('auto-filled');
    payeeInput.placeholder = 'ระบุชื่อผู้รับเงิน เช่น บริษัท C';
    payeeInput.focus();
  }
}

function saveDikka(e) {
  e.preventDefault();
  const selectIndex = document.getElementById('deptSelect').value;
  const selectedRule = inspectorRules[selectIndex];
  const now = new Date();

  const newEntry = {
    id: document.getElementById('dikkaNo').value,
    date: document.getElementById('dikkaDate').value,
    receiveTime: now.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }),
    deptIndex: selectIndex,
    dept: selectedRule ? selectedRule.dept : '-',
    item: document.getElementById('itemDetail').value,
    payee: document.getElementById('payee').value,
    amount: parseFloat(document.getElementById('amount').value),
    inspector: document.getElementById('inspectorInput').value,
    status: 'รอส่ง',
    sentTime: '-'
  };

  dikkaData.push(newEntry);
  localStorage.setItem('dikkaData', JSON.stringify(dikkaData));
  alert('บันทึกข้อมูลเรียบร้อยแล้ว!');
  window.location.href = 'page2.html';
}

function renderDikkaTable() {
  const tbody = document.getElementById('dikkaBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  
  dikkaData.forEach((item, index) => {
    const isSent = item.status === 'ส่งแล้ว';
    tbody.innerHTML += `
      <tr>
        <td><b>${item.id}</b></td>
        <td>${item.date}</td>
        <td><small style="color: #64748b;">${item.receiveTime || '-'}</small></td>
        <td>${item.dept}</td>
        <td><b>${item.payee}</b></td>
        <td><b style="color: #2563eb;">${item.inspector}</b></td>
        <td>
          <button class="btn ${isSent ? 'btn-status sent' : 'btn-status'}" onclick="changeStatus(${index})" ${isSent ? 'disabled' : ''}>
            ${isSent ? 'ส่งแล้ว' : 'ส่งผู้ตรวจ'}
          </button>
        </td>
        <td><small style="color: #059669; font-weight: bold;">${item.sentTime}</small></td>
        <td>
          <button class="btn btn-edit" onclick="openEditModal(${index})">แก้ไข</button>
          <button class="btn btn-delete" onclick="deleteDikka(${index})">ลบ</button>
        </td>
      </tr>
    `;
  });
}

function changeStatus(index) {
  const now = new Date();
  dikkaData[index].status = 'ส่งแล้ว';
  dikkaData[index].sentTime = now.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
  localStorage.setItem('dikkaData', JSON.stringify(dikkaData));
  renderDikkaTable();
}

// เปิดหน้าต่าง Popup เพื่อแก้ไขข้อมูล และเลือก Dropdown กองเดิมให้อัตโนมัติ
function openEditModal(index) {
  const item = dikkaData[index];
  document.getElementById('editIndex').value = index;
  document.getElementById('editDikkaNo').value = item.id;
  document.getElementById('editDikkaDate').value = item.date;
  
  if (item.deptIndex !== undefined) {
    document.getElementById('editDeptSelect').value = item.deptIndex;
  }

  document.getElementById('editPayee').value = item.payee;
  document.getElementById('editInspector').value = item.inspector;
  document.getElementById('editAmount').value = item.amount || 0;
  
  document.getElementById('editModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('editModal').style.display = 'none';
}

// บันทึกการแก้ไขข้อมูลพร้อมเปลี่ยนกองและคำนวณผู้ตรวจให้ใหม่
function saveEdit(e) {
  e.preventDefault();
  const index = document.getElementById('editIndex').value;
  const selectIndex = document.getElementById('editDeptSelect').value;
  const selectedRule = inspectorRules[selectIndex];
  
  dikkaData[index].id = document.getElementById('editDikkaNo').value;
  dikkaData[index].date = document.getElementById('editDikkaDate').value;
  dikkaData[index].deptIndex = selectIndex;
  dikkaData[index].dept = selectedRule ? selectedRule.dept : '-';
  dikkaData[index].payee = document.getElementById('editPayee').value;
  dikkaData[index].inspector = document.getElementById('editInspector').value;
  dikkaData[index].amount = parseFloat(document.getElementById('editAmount').value);

  localStorage.setItem('dikkaData', JSON.stringify(dikkaData));
  closeModal();
  renderDikkaTable();
}

function deleteDikka(index) {
  if (confirm('คุณต้องการลบรายการฎีกานี้ใช่หรือไม่?')) {
    dikkaData.splice(index, 1);
    localStorage.setItem('dikkaData', JSON.stringify(dikkaData));
    renderDikkaTable();
  }
}

function filterTable() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  document.querySelectorAll('#dikkaBody tr').forEach(row => {
    row.style.display = row.innerText.toLowerCase().includes(query) ? '' : 'none';
  });
}

function renderInspectorTable() {
  const tbody = document.getElementById('inspectorBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  inspectorRules.forEach(rule => {
    tbody.innerHTML += `
      <tr>
        <td><b>${rule.dept}</b></td>
        <td>${rule.work}</td>
        <td><b style="color: #2563eb;">${rule.inspector}</b></td>
      </tr>
    `;
  });
}
// แสดงตารางกำหนดผู้ตรวจ หน้า 3 (จัดลำดับคอลัมน์ตรงตามเอกสารต้นฉบับ)
function renderInspectorTable() {
  const tbody = document.getElementById('inspectorBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  inspectorRules.forEach(rule => {
    tbody.innerHTML += `
      <tr>
        <td style="text-align: center;"><b>${rule.dept}</b></td>
        <td style="text-align: center;"><b style="color: #2563eb;">${rule.inspector}</b></td>
        <td>${rule.work}</td>
      </tr>
    `;
  });
}
// อัปเดตสถานะเมื่อกดส่งฎีกาให้ผู้ตรวจ (บันทึกวัน เดือน และเวลา)
function changeStatus(index) {
  const now = new Date();
  
  // แปลงรูปแบบเป็น "26 ส.ค. 13:45 น."
  const formattedDateTime = now.toLocaleDateString('th-TH', { 
    day: 'numeric', 
    month: 'short' 
  }) + ' ' + now.toLocaleTimeString('th-TH', { 
    hour: '2-digit', 
    minute: '2-digit' 
  }) + ' น.';

  dikkaData[index].status = 'ส่งแล้ว';
  dikkaData[index].sentTime = formattedDateTime;
  localStorage.setItem('dikkaData', JSON.stringify(dikkaData));
  renderDikkaTable();
}
// อัปเดตสถานะเมื่อกดส่งฎีกาให้ผู้ตรวจ (บันทึก วัน เดือน ปี พ.ศ. และเวลา)
function changeStatus(index) {
  const now = new Date();
  
  // 1. ดึงวันและเดือนแบบย่อภาษาไทย (เช่น "26 ส.ค.")
  const dayMonth = now.toLocaleDateString('th-TH', { 
    day: 'numeric', 
    month: 'short' 
  });

  // 2. ดึงปี พ.ศ. 2 หลัก (เช่น "69")
  const yearBE = (now.getFullYear() + 543).toString().slice(-2);

  // 3. ดึงเวลา (เช่น "13:45")
  const time = now.toLocaleTimeString('th-TH', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  // รวมรูปแบบเป็น "26 ส.ค. 69 13:45 น."
  const formattedDateTime = `${dayMonth} ${yearBE} ${time} น.`;

  dikkaData[index].status = 'ส่งแล้ว';
  dikkaData[index].sentTime = formattedDateTime;
  localStorage.setItem('dikkaData', JSON.stringify(dikkaData));
  renderDikkaTable();
}
