// Check authentication
if (!sessionStorage.getItem('adminLoggedIn')) {
    window.location.href = 'index.html';
}

// Set username
document.getElementById('userName').textContent = sessionStorage.getItem('adminUser') || 'Admin';

// Logout function
function logout() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}

// API Configuration
const API_CONFIG = {
    // In production, this should point to your backend API
    // For now, we'll use mock data
    baseUrl: 'https://your-api-endpoint.com/api',
    useMockData: true // Set to false when backend is ready
};

// Mock data for development
const mockSubmissions = [
    {
        id: 1,
        form_type: 'training_registration',
        name: 'Jan Jansen',
        email: 'jan@example.com',
        phone: '06-12345678',
        company: 'ABC Bedrijf',
        message: 'Ik wil graag meer informatie over de training.',
        status: 'new',
        submitted_at: '2026-01-11T10:30:00'
    },
    {
        id: 2,
        form_type: 'contact',
        name: 'Maria de Vries',
        email: 'maria@example.com',
        phone: '06-87654321',
        company: null,
        message: 'Vraag over jullie diensten.',
        status: 'read',
        submitted_at: '2026-01-10T14:20:00'
    },
    {
        id: 3,
        form_type: 'training_registration',
        name: 'Piet Bakker',
        email: 'piet@example.com',
        phone: '06-11223344',
        company: 'XYZ Corp',
        message: 'Interesse in de training voor ons team.',
        status: 'new',
        submitted_at: '2026-01-09T09:15:00'
    }
];

// Load submissions
async function loadSubmissions() {
    const filterType = document.getElementById('filterType').value;
    const filterStatus = document.getElementById('filterStatus').value;
    
    try {
        let submissions;
        
        if (API_CONFIG.useMockData) {
            // Use mock data
            submissions = mockSubmissions.filter(sub => {
                if (filterType && sub.form_type !== filterType) return false;
                if (filterStatus && sub.status !== filterStatus) return false;
                return true;
            });
        } else {
            // Fetch from API
            const params = new URLSearchParams();
            if (filterType) params.append('type', filterType);
            if (filterStatus) params.append('status', filterStatus);
            
            const response = await fetch(`${API_CONFIG.baseUrl}/submissions?${params}`);
            submissions = await response.json();
        }
        
        // Update stats
        updateStats(submissions);
        
        // Render table
        renderTable(submissions);
        
    } catch (error) {
        console.error('Error loading submissions:', error);
        document.getElementById('tableContent').innerHTML = 
            '<div class="no-data">Fout bij laden van gegevens. Probeer het later opnieuw.</div>';
    }
}

// Update statistics
function updateStats(submissions) {
    const total = API_CONFIG.useMockData ? mockSubmissions.length : submissions.length;
    const newCount = mockSubmissions.filter(s => s.status === 'new').length;
    const trainingCount = mockSubmissions.filter(s => s.form_type === 'training_registration').length;
    const contactCount = mockSubmissions.filter(s => s.form_type === 'contact').length;
    
    document.getElementById('totalSubmissions').textContent = total;
    document.getElementById('newSubmissions').textContent = newCount;
    document.getElementById('trainingSubmissions').textContent = trainingCount;
    document.getElementById('contactSubmissions').textContent = contactCount;
}

// Render table
function renderTable(submissions) {
    if (submissions.length === 0) {
        document.getElementById('tableContent').innerHTML = 
            '<div class="no-data">Geen inzendingen gevonden.</div>';
        return;
    }
    
    const tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Datum</th>
                    <th>Type</th>
                    <th>Naam</th>
                    <th>Email</th>
                    <th>Telefoon</th>
                    <th>Organisatie</th>
                    <th>Status</th>
                    <th>Bericht</th>
                </tr>
            </thead>
            <tbody>
                ${submissions.map(sub => `
                    <tr>
                        <td>${formatDate(sub.submitted_at)}</td>
                        <td>
                            <span class="badge ${sub.form_type === 'training_registration' ? 'badge-training' : 'badge-contact'}">
                                ${sub.form_type === 'training_registration' ? 'Training' : 'Contact'}
                            </span>
                        </td>
                        <td><strong>${sub.name}</strong></td>
                        <td><a href="mailto:${sub.email}">${sub.email}</a></td>
                        <td><a href="tel:${sub.phone}">${sub.phone || '-'}</a></td>
                        <td>${sub.company || '-'}</td>
                        <td>
                            <span class="badge ${getStatusBadgeClass(sub.status)}">
                                ${getStatusLabel(sub.status)}
                            </span>
                        </td>
                        <td>${sub.message ? sub.message.substring(0, 50) + '...' : '-'}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    
    document.getElementById('tableContent').innerHTML = tableHTML;
}

// Helper functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('nl-NL', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function getStatusBadgeClass(status) {
    const classes = {
        'new': 'badge-new',
        'read': 'badge-read',
        'contacted': 'badge-contact',
        'completed': 'badge-contact'
    };
    return classes[status] || 'badge-new';
}

function getStatusLabel(status) {
    const labels = {
        'new': 'Nieuw',
        'read': 'Gelezen',
        'contacted': 'Gecontacteerd',
        'completed': 'Afgerond'
    };
    return labels[status] || status;
}

// Load data on page load
loadSubmissions();

