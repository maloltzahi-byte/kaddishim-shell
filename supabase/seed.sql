insert into calls (call_id, city, location, area, requested_time, required_count, missing_count, confirmed_count, contact_name, contact_phone, volunteers_needed, status, urgency)
values ('M-2025-0548', 'בני ברק', 'בית החיים בני ברק', 'חלקה ב׳', '07:00', 10, 2, 8, 'גבאי המקום', '050-1111111', 10, 'פתוחה', 'גבוהה')
on conflict (call_id) do nothing;

insert into kaddish_requests (request_id, deceased_name, city, request_type, start_date, volunteer_status, status, urgency)
values ('K-2025-0321', 'יעקב בן משה', 'ירושלים', 'יומי', '28/04/2026', 'הוקצה', 'פעילה', 'רגילה')
on conflict (request_id) do nothing;

insert into volunteers (volunteer_id, full_name, city, phone, availability, weekly_assignments, activity_area, assigned_today, status)
values ('V-2025-0142', 'אברהם כהן', 'ירושלים', '050-1234567', 'היום', 4, 'ירושלים והסביבה', 1, 'פעיל')
on conflict (volunteer_id) do nothing;

insert into members (member_id, full_name, city, phone, email, membership_type, member_type, community, last_activity, status)
values ('C-2025-1284', 'שלמה אברמוב', 'ירושלים', '050-1112233', 'shlomo@example.com', 'קבוע', 'חבר', 'ירושלים', 'לפני 6 דק׳', 'פעיל')
on conflict (member_id) do nothing;
