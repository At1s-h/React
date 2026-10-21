import React from 'react';

function Advisory() {
  const regions = [
    { id: 'north', name: 'North Zone' },
    { id: 'central', name: 'Central Zone' },
    { id: 'south', name: 'South Zone' }
  ];

  return (
    <div className="form-container">
      <h1>Online Heatwave Advisory Subscription</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <h3>Citizen Contact Details</h3>
        <div className="form-group"><label>Full Name:</label><input type="text" placeholder="Enter full name" required /></div>
        <div className="form-group"><label>Email Address:</label><input type="email" placeholder="Enter email address" required /></div>
        <div className="form-group"><label>Mobile Number:</label><input type="tel" placeholder="Enter mobile number" required /></div>

        <h3>Subscription Preferences</h3>
        <div className="form-group">
          <label>Select Region:</label>
          <select defaultValue="">
            <option value="" disabled>-- Choose a Region --</option>
            {regions.map(region => (
              <option key={region.id} value={region.id}>{region.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Preferred Alert Language:</label>
          <div className="checkbox-group">
            <label><input type="checkbox" defaultChecked /> English</label>
            <label><input type="checkbox" /> Hindi</label>
            <label><input type="checkbox" /> Marathi</label>
          </div>
        </div>

        <div className="form-group">
          <label>Alert Types to Receive:</label>
          <div className="checkbox-group">
            <label><input type="checkbox" /> SMS Warning</label>
            <label><input type="checkbox" defaultChecked /> Daily Email Digest</label>
            <label><input type="checkbox" /> Severe Heatwave Flash Alert</label>
          </div>
        </div>

        <div className="button-group">
          <button type="submit" className="btn-submit">Subscribe to Alerts</button>
          <button type="reset" className="btn-reset">Reset Form</button>
        </div>
      </form>
    </div>
  );
}

export default Advisory;
